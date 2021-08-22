import { ChartModel } from 'src/app/core/models/chart.model';
import { SummaryResponseModificationModel } from 'src/app/core/models/summary-response.model';

import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-total-summary',
  templateUrl: './total-summary.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TotalSummaryComponent implements OnInit {
  @HostBinding('class.app-block') centerContent = true;
  @Input() totalSummary: SummaryResponseModificationModel =
    new Object() as SummaryResponseModificationModel;

  chartData: ChartModel[] = [];
  constructor() {}

  ngOnInit(): void {
    for (const [key, value] of Object.entries(this.totalSummary)) {
      this.chartData.push({
        name: key,
        value,
      });
    }
  }
}
