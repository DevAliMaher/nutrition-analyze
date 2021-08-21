import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SummayComponent } from './summay.component';

const routes: Routes = [{ path: '', component: SummayComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SummayRoutingModule {
  static components = [SummayComponent];
}
