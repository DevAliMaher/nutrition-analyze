import { HintsData } from 'src/app/core/models/hints.model';

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-hints',
  template: `
    <h2 class="hint-header">{{ 'hint-header' | translate }}</h2>

    <p class="hint-title">{{ 'hint-title' | translate }}</p>

    <mat-nav-list [attr.dir]="'dir' | translate">
      <a
        mat-list-item
        *ngFor="let item of hintList; let i = index"
        class="hint-list-item add-mark"
      >
        <span mat-line> {{ item.title | translate }}</span>
      </a>
    </mat-nav-list>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HintsComponent {
  hintList = HintsData;
  constructor(private bottomSheetRef: MatBottomSheetRef<HintsComponent>) {}

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
