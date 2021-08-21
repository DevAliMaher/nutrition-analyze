import { TextFieldModule } from '@angular/cdk/text-field';
import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';

import { SharedModule } from '../shared.module';
import { TextAreaComponent } from './text-area.component';

@NgModule({
  declarations: [TextAreaComponent],
  imports: [SharedModule, MatInputModule, TextFieldModule],
  exports: [TextAreaComponent],
})
export class TextAreaModule {}
