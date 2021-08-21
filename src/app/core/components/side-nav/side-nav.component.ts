import { MainRoutesData } from 'src/app/core/models/routes.model';

import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-side-nav',
  template: `
    <a
      *ngFor="let route of routes"
      [routerLink]="[route.route]"
      routerLinkActive="route-item-active"
      (click)="closeNav.emit(true)"
      class="route-item"
    >
      {{ route.title | translate }}
    </a>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideNavComponent {
  @HostBinding('class.all-space-padding') appSideNav = true;
  @Output() closeNav = new EventEmitter<boolean>();
  routes = MainRoutesData;
}
