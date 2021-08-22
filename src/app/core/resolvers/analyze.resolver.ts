import { forkJoin, Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {
  FullRecipeAnalysisService,
  IndividualTextLineAnalysisService,
} from 'src/app/api/services';
import {
  ModifiedNutrientsModel as ModifiedNutrientsModel,
  SummaryResponseModel,
  SummaryResponseModificationModel,
} from 'src/app/core/models/summary-response.model';
import { environment } from 'src/environments/environment';

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AnalyzeResolver implements Resolve<any> {
  constructor(
    private fullRecipeAnalysisService: FullRecipeAnalysisService,
    private individualTextLineAnalysisService: IndividualTextLineAnalysisService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot
  ): Observable<SummaryResponseModificationModel[] | null> {
    const title = route.queryParams.title;
    const ingr = route.queryParams.ingr.split('\n');
    const appId = environment.appId;
    const appKey = environment.appKey;
    // creates array of observables to forkjoin all
    const observables: Observable<SummaryResponseModel>[] = [];

    // push request to get summary for all ingredients
    observables.push(
      this.fullRecipeAnalysisService.postApiNutritionDetails({
        body: { title, ingr },
        appId,
        appKey,
      })
    );
    // push request to get details for each ingredient
    ingr.forEach((i: string) => {
      observables.push(
        this.individualTextLineAnalysisService.getApiNutritionData({
          ingr: i,
          appId,
          appKey,
        })
      );
    });
// the response make quite confused,  I would call at first post api to get summary and ingredients then use concatmap to forkjoin get api for all ingredients but as i said response wasn't match my expectation
    // join all requests in one
    return forkJoin(observables).pipe(
      // map data to display it
      map((responses) => {
        return responses.map((res) => {
          const totalDaily: ModifiedNutrientsModel = {
            '1- FATS': {
              header: res.totalDaily.FAT,
              related: [
                res.totalDaily.FASAT,
                res.totalDaily.FATRN,
                res.totalDaily.FAMS,
                res.totalDaily.FAPU,
              ],
            },
            '3- PROTEIN': {
              header: res.totalDaily.PROCNT,
              related: [
                res.totalDaily.CHOLE,
                res.totalDaily.NA,
                res.totalDaily.CA,
                res.totalDaily.MG,
                res.totalDaily.K,
                res.totalDaily.FE,
                res.totalDaily.ZN,
                res.totalDaily.P,
                res.totalDaily.VITA_RAE,
                res.totalDaily.VITC,
                res.totalDaily.THIA,
                res.totalDaily.RIBF,
                res.totalDaily.NIA,
                res.totalDaily.VITB6A,
                res.totalDaily.FOLDFE,
                res.totalDaily.FOLFD,
                res.totalDaily.FOLAC,
                res.totalDaily.VITB12,
                res.totalDaily.TOCPHA,
              ],
            },
            '2- CARBS': {
              header: res.totalNutrients.CHOCDF,
              related: [res.totalNutrients.FIBTG, res.totalNutrients.SUGAR],
            },
          };

          const totalNutrients: ModifiedNutrientsModel = {
            '1- FATS': {
              header: res.totalNutrients.FAT,
              related: [
                res.totalNutrients.FASAT,
                res.totalNutrients.FATRN,
                res.totalNutrients.FAMS,
                res.totalNutrients.FAPU,
              ],
            },
            '3- PROTEIN': {
              header: res.totalNutrients.PROCNT,
              related: [
                res.totalNutrients.CHOLE,
                res.totalNutrients.NA,
                res.totalNutrients.CA,
                res.totalNutrients.MG,
                res.totalNutrients.K,
                res.totalNutrients.FE,
                res.totalNutrients.ZN,
                res.totalNutrients.P,
                res.totalNutrients.VITA_RAE,
                res.totalNutrients.VITC,
                res.totalNutrients.THIA,
                res.totalNutrients.RIBF,
                res.totalNutrients.NIA,
                res.totalNutrients.VITB6A,
                res.totalNutrients.FOLDFE,
                res.totalNutrients.FOLFD,
                res.totalNutrients.FOLAC,
                res.totalNutrients.VITB12,
                res.totalNutrients.TOCPHA,
              ],
            },
            '2- CARBS': {
              header: res.totalNutrients.CHOCDF,
              related: [res.totalNutrients.FIBTG, res.totalNutrients.SUGAR],
            },
          };

          const modifiedRes: SummaryResponseModificationModel = {
            ...res,
            totalDaily: totalDaily,
            totalNutrients: totalNutrients,
          };
          return modifiedRes;
        });
      }),
      catchError(() => {
        return of(null);
      })
    );
  }
}
