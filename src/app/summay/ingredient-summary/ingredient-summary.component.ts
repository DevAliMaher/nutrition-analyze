import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  OnInit,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  SingleIngredientModel,
  SummaryResponseModificationModel,
} from 'src/app/core/models/summary-response.model';

@Component({
  selector: 'app-ingredient-summary',
  template: `
    <div
      *ngFor="let ingredient of ingredients"
      class="flex items-center p-4 mb-4 rounded sm:flex-wrap bg-main-gray dark:bg-main-lighterDark"
    >
      <p
        *ngFor="let item of ingredient | keyvalue"
        class="flex items-center flex-1 xs:text-sm sm:w-full sm:flex-none"
      >
        <span class="inline-block w-2/4 font-bold"
          >{{ item.key | removeCount | translate }} :</span
        >
        <span class="capitalize">{{ item.value }}</span>
      </p>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IngredientSummaryComponent implements OnInit {
  @HostBinding('class.app-block') centerContent = true;
  @Input() ingredientSummary: SummaryResponseModificationModel[] = [];

  ingredients: SingleIngredientModel[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.ingredients = this.route.snapshot.queryParams.ingr
      ?.split('\n')
      .map((item: string, index: number) => {
        return {
          '1- Ingredient': item,
          '2- Calories': this.ingredientSummary[index].calories,
          '3- Weight': this.ingredientSummary[index].totalWeight,
        };
      });
  }
}
