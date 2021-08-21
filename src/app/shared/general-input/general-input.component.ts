import { InputModel } from 'src/app/core/models/input.model';

import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-general-input',
  template: `
    <mat-form-field appearance="outline" class="input">
      <input
        matInput
        [formControl]="control.control"
        [placeholder]="control.placeholder | translate"
      />
      <mat-error *ngIf="control.control.errors?.required">
        {{ control.error | translate }}
      </mat-error>
    </mat-form-field>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GeneralInputComponent {
  @HostBinding('class.app-full-width') app = true;
  @Input() control: InputModel = {} as InputModel;
}
