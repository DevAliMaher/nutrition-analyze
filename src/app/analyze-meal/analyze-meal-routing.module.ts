import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AnalyzeMealComponent } from './analyze-meal.component';

const routes: Routes = [{ path: '', component: AnalyzeMealComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnalyzeMealRoutingModule {
  static components = [AnalyzeMealComponent];
}
