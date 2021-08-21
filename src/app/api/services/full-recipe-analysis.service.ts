/* tslint:disable */
import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpRequest,
  HttpResponse,
  HttpHeaders,
} from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';
import { SummaryResponseModel } from 'src/app/core/models/summary-response.model';

@Injectable({
  providedIn: 'root',
})
class FullRecipeAnalysisService extends __BaseService {
  static readonly postApiNutritionDetailsPath = '/api/nutrition-details';

  constructor(config: __Configuration, http: HttpClient) {
    super(config, http);
  }

  /**
   * <b>Click here to view the documentation</b>
   *
   * This returns the nutritional information based on a POST request of the recipe content. The POST request submits the recipe content, specifically the recipe title and ingredient list. The response the API returns, will contain the nutritional analysis for the recipe based on the information provided.
   *
   *  <b>Access Point:</b> https://api.edamam.com/api/nutrition-details
   * @param params The `FullRecipeAnalysisService.PostApiNutritionDetailsParams` containing the following parameters:
   *
   * - `body`: Using the food ID and the measure URI which parser provides you can make a request to the nutrients access point. The nutrients access points returns nutrition with diet and health labels for a given quantity of the food.
   *
   * - `app_key`: App key from your dashboard
   *
   * - `app_id`: App ID from your dashboard
   *
   * - `force`: Forces the re-evaluation of the recipe. The value, if any, is ignored.
   *
   * - `If-None-Match`: Each successfully processed recipe will also return a tag in the ETag response header. This value must be preserved together with the recipe. When resubmitting the recipe, you should include the value in the If-None-Match request header and store the updated ETag header.
   */
  postApiNutritionDetailsResponse(
    params: FullRecipeAnalysisService.PostApiNutritionDetailsParams
  ): __Observable<__StrictHttpResponse<SummaryResponseModel>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = params.body;
    if (params.appKey != null)
      __params = __params.set('app_key', params.appKey.toString());
    if (params.appId != null)
      __params = __params.set('app_id', params.appId.toString());
    if (params.force != null)
      __params = __params.set('force', params.force.toString());
    if (params.IfNoneMatch != null)
      __headers = __headers.set('If-None-Match', params.IfNoneMatch.toString());
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/nutrition-details`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json',
      }
    );

    return this.http.request<any>(req).pipe(
      __filter((_r) => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<SummaryResponseModel>;
      })
    );
  }
  /**
   * <b>Click here to view the documentation</b>
   *
   * This returns the nutritional information based on a POST request of the recipe content. The POST request submits the recipe content, specifically the recipe title and ingredient list. The response the API returns, will contain the nutritional analysis for the recipe based on the information provided.
   *
   *  <b>Access Point:</b> https://api.edamam.com/api/nutrition-details
   * @param params The `FullRecipeAnalysisService.PostApiNutritionDetailsParams` containing the following parameters:
   *
   * - `body`: Using the food ID and the measure URI which parser provides you can make a request to the nutrients access point. The nutrients access points returns nutrition with diet and health labels for a given quantity of the food.
   *
   * - `app_key`: App key from your dashboard
   *
   * - `app_id`: App ID from your dashboard
   *
   * - `force`: Forces the re-evaluation of the recipe. The value, if any, is ignored.
   *
   * - `If-None-Match`: Each successfully processed recipe will also return a tag in the ETag response header. This value must be preserved together with the recipe. When resubmitting the recipe, you should include the value in the If-None-Match request header and store the updated ETag header.
   */
  postApiNutritionDetails(
    params: FullRecipeAnalysisService.PostApiNutritionDetailsParams
  ): __Observable<SummaryResponseModel> {
    return this.postApiNutritionDetailsResponse(params).pipe(
      __map((_r) => _r.body as SummaryResponseModel)
    );
  }
}

module FullRecipeAnalysisService {
  /**
   * Parameters for postApiNutritionDetails
   */
  export interface PostApiNutritionDetailsParams {
    /**
     * Using the food ID and the measure URI which parser provides you can make a request to the nutrients access point. The nutrients access points returns nutrition with diet and health labels for a given quantity of the food.
     */
    body: {
      title: string;
      ingr: Array<string>;
      url?: string;
      summary?: string;
      yield?: string;
      time?: string;
      img?: string;
      prep?: string;
      cuisine?: string;
      mealtype?: string;
      dishtype?: string;
    };

    /**
     * App key from your dashboard
     */
    appKey: string;

    /**
     * App ID from your dashboard
     */
    appId: string;

    /**
     * Forces the re-evaluation of the recipe. The value, if any, is ignored.
     */
    force?: boolean;

    /**
     * Each successfully processed recipe will also return a tag in the ETag response header. This value must be preserved together with the recipe. When resubmitting the recipe, you should include the value in the If-None-Match request header and store the updated ETag header.
     */
    IfNoneMatch?: string;
  }
}

export { FullRecipeAnalysisService };
