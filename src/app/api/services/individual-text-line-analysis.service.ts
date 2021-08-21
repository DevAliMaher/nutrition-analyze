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
class IndividualTextLineAnalysisService extends __BaseService {
  static readonly getApiNutritionDataPath = '/api/nutrition-data';

  constructor(config: __Configuration, http: HttpClient) {
    super(config, http);
  }

  /**
   * <b>Click here to view the documentation</b>
   *
   * This returns the nutritional analysis for the specified food text by extracting information from a short unstructured food text (usually an ingredient line and returns the following structured data for the text: quantity, measure and food,) and if available: diet, health and allergen labels for the text.  With the built in food logging feature, this allows for change of context. For example, “rice” will normally be matched to raw rice while, with the food logging feature on, it will match to ready to eat ‘cooked rice.’
   *
   *  <b>Access Point:</b> https://api.edamam.com/api/nutrition-data
   * @param params The `IndividualTextLineAnalysisService.GetApiNutritionDataParams` containing the following parameters:
   *
   * - `ingr`: The ingredient.
   *
   * - `app_key`: App key from your dashboard.
   *
   * - `app_id`: App ID from your dashboard.
   *
   * - `nutrition-type`: Select between the cooking and food logging processor.
   *
   * - `If-None-Match`: First, each successfully processed recipe will also return a tag in the ETag response header. This value must be preserved together with the recipe. Then, when resubmitting the recipe, you should include the value in the 'If-None-Match' request header.
   */
  getApiNutritionDataResponse(
    params: IndividualTextLineAnalysisService.GetApiNutritionDataParams
  ): __Observable<__StrictHttpResponse<SummaryResponseModel>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.ingr != null)
      __params = __params.set('ingr', params.ingr.toString());
    if (params.appKey != null)
      __params = __params.set('app_key', params.appKey.toString());
    if (params.appId != null)
      __params = __params.set('app_id', params.appId.toString());
    if (params.nutritionType != null)
      __params = __params.set(
        'nutrition-type',
        params.nutritionType.toString()
      );
    if (params.IfNoneMatch != null)
      __headers = __headers.set('If-None-Match', params.IfNoneMatch.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/nutrition-data`,
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
   * This returns the nutritional analysis for the specified food text by extracting information from a short unstructured food text (usually an ingredient line and returns the following structured data for the text: quantity, measure and food,) and if available: diet, health and allergen labels for the text.  With the built in food logging feature, this allows for change of context. For example, “rice” will normally be matched to raw rice while, with the food logging feature on, it will match to ready to eat ‘cooked rice.’
   *
   *  <b>Access Point:</b> https://api.edamam.com/api/nutrition-data
   * @param params The `IndividualTextLineAnalysisService.GetApiNutritionDataParams` containing the following parameters:
   *
   * - `ingr`: The ingredient.
   *
   * - `app_key`: App key from your dashboard.
   *
   * - `app_id`: App ID from your dashboard.
   *
   * - `nutrition-type`: Select between the cooking and food logging processor.
   *
   * - `If-None-Match`: First, each successfully processed recipe will also return a tag in the ETag response header. This value must be preserved together with the recipe. Then, when resubmitting the recipe, you should include the value in the 'If-None-Match' request header.
   */
  getApiNutritionData(
    params: IndividualTextLineAnalysisService.GetApiNutritionDataParams
  ): __Observable<SummaryResponseModel> {
    return this.getApiNutritionDataResponse(params).pipe(
      __map((_r) => _r.body as SummaryResponseModel)
    );
  }
}

module IndividualTextLineAnalysisService {
  /**
   * Parameters for getApiNutritionData
   */
  export interface GetApiNutritionDataParams {
    /**
     * The ingredient.
     */
    ingr: string;

    /**
     * App key from your dashboard.
     */
    appKey: string;

    /**
     * App ID from your dashboard.
     */
    appId: string;

    /**
     * Select between the cooking and food logging processor.
     */
    nutritionType?: 'cooking' | 'logging';

    /**
     * First, each successfully processed recipe will also return a tag in the ETag response header. This value must be preserved together with the recipe. Then, when resubmitting the recipe, you should include the value in the 'If-None-Match' request header.
     */
    IfNoneMatch?: string;
  }
}

export { IndividualTextLineAnalysisService };
