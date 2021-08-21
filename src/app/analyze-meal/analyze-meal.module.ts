import { HintsComponent } from 'src/app/analyze-meal/hints/hints.component';

import { NgModule } from '@angular/core';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';

import { GeneralInputModule } from '../shared/general-input/general-input.module';
import { SharedModule } from '../shared/shared.module';
import { TextAreaModule } from '../shared/text-area/text-area.module';
import { AnalyzeMealRoutingModule } from './analyze-meal-routing.module';

@NgModule({
  declarations: [AnalyzeMealRoutingModule.components, HintsComponent],
  imports: [
    SharedModule,
    GeneralInputModule,
    TextAreaModule,
    MatBottomSheetModule,
    MatListModule,
    AnalyzeMealRoutingModule,
  ],
})
export class AnalyzeMealModule {}
