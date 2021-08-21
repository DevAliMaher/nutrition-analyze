import { QuicklinkModule, QuicklinkStrategy } from 'ngx-quicklink';
import { ErrorPageComponent } from 'src/app/core/components/error-page/error-page.component';
import { AnalyzeResolver } from 'src/app/core/resolvers/analyze.resolver';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'analyze-meal',
    loadChildren: () =>
      import('./analyze-meal/analyze-meal.module').then(
        (m) => m.AnalyzeMealModule
      ),
  },
  {
    path: 'summary',
    loadChildren: () =>
      import('./summay/summay.module').then((m) => m.SummayModule),
    resolve: { ingredient: AnalyzeResolver },
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '**',
    component: ErrorPageComponent,
    data: { message: 'no-page-found' },
  },
];

@NgModule({
  imports: [
    QuicklinkModule,
    RouterModule.forRoot(routes, { preloadingStrategy: QuicklinkStrategy }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
