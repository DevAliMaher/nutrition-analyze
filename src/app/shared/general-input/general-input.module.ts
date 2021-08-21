import { SharedModule } from './../shared.module';
import { NgModule } from '@angular/core';
import { GeneralInputComponent } from './general-input.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [GeneralInputComponent],
  imports: [SharedModule, MatFormFieldModule, MatInputModule],
  exports: [GeneralInputComponent],
})
export class GeneralInputModule {}
