import { InputModel } from 'src/app/core/models/input.model';

import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-text-area',
  template: `
    <mat-form-field appearance="outline" class="input">
      <textarea
        [formControl]="control.control"
        [placeholder]="control.placeholder | translate"
        matInput
        cdkTextareaAutosize
        cdkAutosizeMinRows="4"
        cdkAutosizeMaxRows="15"
      ></textarea>
      <mat-error *ngIf="control.control.errors?.required">
        {{ control.error | translate }}
      </mat-error>
    </mat-form-field>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextAreaComponent {
  @HostBinding('class.app-full-width') app = true;
  @Input() control: InputModel = {
    control: new FormControl(),
    placeholder: '',
    error: '',
  };
}
