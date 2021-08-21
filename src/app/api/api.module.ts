/* tslint:disable */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {
  ApiConfiguration,
  ApiConfigurationInterface,
} from './api-configuration';

import { FullRecipeAnalysisService } from './services/full-recipe-analysis.service';
import { IndividualTextLineAnalysisService } from './services/individual-text-line-analysis.service';

/**
 * Provider for all Api services, plus ApiConfiguration
 */
@NgModule({
  imports: [HttpClientModule],
  exports: [HttpClientModule],
  declarations: [],
  providers: [
    ApiConfiguration,
    FullRecipeAnalysisService,
    IndividualTextLineAnalysisService,
  ],
})
export class ApiModule {
  static forRoot(
    customParams: ApiConfigurationInterface
  ): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: { rootUrl: customParams.rootUrl },
        },
      ],
    };
  }
}
