import { AppSettingsModel } from 'src/app/core/models/app-states.model';
import {
  LangToggleAction,
  ThemeToggleAction,
} from 'src/app/core/states/app.actions';

import { Injectable, NgZone, Renderer2, RendererFactory2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Action, NgxsOnInit, Selector, State, StateContext } from '@ngxs/store';

import { AppDirType, AppThemeType } from '../models/app-states.model';

@State<AppSettingsModel>({
  name: 'appSettings',
  defaults: {
    lang: 'en',
    dir: 'ltr',
    theme: 'dark',
  },
})
@Injectable({
  providedIn: 'root',
})
export class AppSettingsState implements NgxsOnInit {
  // renderer should used in directives or component but this implementation try to avoid direct manipulation to the dom.
  private renderer: Renderer2;
  constructor(
    private translateService: TranslateService,
    private ngZone: NgZone,
    rendererFactory: RendererFactory2
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  ngxsOnInit(ctx: StateContext<AppSettingsModel>) {
    // set default lang
    this.ngZone.run(() =>
      this.translateService.setDefaultLang(ctx.getState().lang)
    );
    // set default dir
    this.setAppDir(ctx.getState().dir);
    // set default theme
    this.setAppTheme(ctx.getState().theme);
  }

  // toggle lang action
  @Action(LangToggleAction)
  AppLangToggle(ctx: StateContext<AppSettingsModel>, action: LangToggleAction) {
    ctx.patchState({ lang: action.lang, dir: action.dir });
    this.ngZone.run(() => this.translateService.use(action.lang));
    this.setAppDir(action.dir);
  }
  // toggle theme action
  @Action(ThemeToggleAction)
  AppThemeToggle(
    ctx: StateContext<AppSettingsModel>,
    action: ThemeToggleAction
  ) {
    ctx.patchState({ theme: action.theme });
    this.setAppTheme(action.theme);
  }

  // lang selector
  @Selector()
  static appTheme(state: AppSettingsModel) {
    return state.theme;
  }

  // theme selector
  @Selector()
  static appLang(state: AppSettingsModel) {
    return state.lang;
  }

  private setAppDir(dir: AppDirType): void {
    this.renderer.setAttribute(document.documentElement, 'dir', dir);
  }

  private setAppTheme(theme: AppThemeType): void {
    theme === 'dark'
      ? this.renderer.addClass(document.documentElement, 'dark')
      : this.renderer.removeAttribute(document.documentElement, 'class');
  }
}
