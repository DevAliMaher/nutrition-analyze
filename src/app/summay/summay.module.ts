import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { RemoveCountPipe } from 'src/app/summay/remove-count.pipe';

import { SharedModule } from '../shared/shared.module';
import { IngredientSummaryComponent } from './ingredient-summary/ingredient-summary.component';
import { SummayRoutingModule } from './summay-routing.module';
import { TotalSummaryComponent } from './total-summary/total-summary.component';

@NgModule({
  declarations: [
    SummayRoutingModule.components,
    TotalSummaryComponent,
    IngredientSummaryComponent,
    RemoveCountPipe,
  ],
  imports: [SharedModule, MatExpansionModule, SummayRoutingModule],
})
export class SummayModule {}
