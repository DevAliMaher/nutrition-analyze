import { Observable } from 'rxjs';
import {
  AppLangType,
  AppThemeType,
} from 'src/app/core/models/app-states.model';
import { AppSettingsState } from 'src/app/core/states/app-state';

import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostBinding,
  OnInit,
  Output,
} from '@angular/core';
import { Select } from '@ngxs/store';
import { MainRoutesData } from 'src/app/core/models/routes.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  @HostBinding('class.app-header') appHeader = true;

  lang!: AppLangType;
  @Select(AppSettingsState.appLang) lang$!: Observable<AppLangType>;
  @Output() toggleLang = new EventEmitter<AppLangType>();

  theme!: AppThemeType;
  @Select(AppSettingsState.appTheme) theme$!: Observable<AppThemeType>;
  @Output() toggleTheme = new EventEmitter<AppThemeType>();

  @Output() toggleSideNav = new EventEmitter<boolean>();

  routes = MainRoutesData;

  ngOnInit(): void {
    this.lang$.subscribe((res) => {
      this.lang = res === 'en' ? 'ar' : 'en';
    });

    this.theme$.subscribe((res) => {
      this.theme = res === 'light' ? 'dark' : 'light';
    });
  }
}
