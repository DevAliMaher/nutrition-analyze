import { ApiConfiguration } from 'src/app/api/api-configuration';
import { ApiModule } from 'src/app/api/api.module';
import { ErrorPageComponent } from 'src/app/core/components/error-page/error-page.component';
import { HeaderComponent } from 'src/app/core/components/header/header.component';
import { SideNavComponent } from 'src/app/core/components/side-nav/side-nav.component';
import { ModuleLoadedOnceGuard } from 'src/app/core/guards/module-loaded-once.guard';
import { AuthInterceptor } from 'src/app/core/interceptors/auth.interceptor';
import { ErrorInterceptor } from 'src/app/core/interceptors/error.interceptor';
import { AppSettingsState } from 'src/app/core/states/app-state';
import { environment } from 'src/environments/environment';

import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCommonModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { NgxsModule } from '@ngxs/store';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [HeaderComponent, SideNavComponent, ErrorPageComponent],
  imports: [
    BrowserAnimationsModule,
    RouterModule,
    ApiModule.forRoot(new ApiConfiguration()),
    NgxsModule.forRoot([AppSettingsState], {
      developmentMode: !environment.production,
    }),
    NgxsStoragePluginModule.forRoot({
      key: ['appSettings'],
    }),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    MatCommonModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatSidenavModule,
    MatProgressBarModule,
    MatToolbarModule,
  ],
  exports: [
    HeaderComponent,
    SideNavComponent,
    ErrorPageComponent,
    BrowserAnimationsModule,
    ApiModule,
    NgxsModule,
    NgxsStoragePluginModule,
    NgxsReduxDevtoolsPluginModule,
    NgxsLoggerPluginModule,
    TranslateModule,
    MatCommonModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatProgressBarModule,
    MatToolbarModule,
  ],
})
export class CoreModule extends ModuleLoadedOnceGuard {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }

  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthInterceptor,
          multi: true,
        },
        {
          provide: HTTP_INTERCEPTORS,
          useClass: ErrorInterceptor,
          multi: true,
        },
      ],
    };
  }
}
