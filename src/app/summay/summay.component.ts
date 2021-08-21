import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SummaryResponseModificationModel } from 'src/app/core/models/summary-response.model';

import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-summay',
  template: `
    <ng-container *ngIf="responseSummary$ | async as responseSummary">
      <ng-container *ngIf="!error">
        <div class="responsive-container flex-column">
          <h1 class="summary-header">
            {{ 'Ingredients-Analyses' | translate }}
          </h1>

          <app-ingredient-summary
            [ingredientSummary]="
              responseSummary | slice: 1:responseSummary.length
            "
          ></app-ingredient-summary>

          <app-total-summary
            [totalSummary]="responseSummary[0]"
          ></app-total-summary>
        </div>
      </ng-container>
    </ng-container>

    <div *ngIf="error" class="responsive-container flex-column">
      <div class="error-message-container">
        <h3 class="error-header">{{ 'error' | translate }}</h3>
        <p class="error-body">{{ 'errorMessage' | translate }}</p>
        <button
          type="button"
          mat-raised-button
          color="warn"
          class="mt-4"
          (click)="location.back()"
        >
          {{ 'nav-back' | translate }}
        </button>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SummayComponent implements OnInit {
  @HostBinding('class.app-full-space') centerContent = true;
  responseSummary$!: Observable<SummaryResponseModificationModel[]>;
  error = false;

  constructor(private route: ActivatedRoute, public location: Location) {}

  ngOnInit(): void {
    this.responseSummary$ = this.route.data.pipe(
      map((data) => {
        if (data.ingredient) {
          console.log(data);
          return data.ingredient;
        }
        return (this.error = true);
      })
    );
  }
}
