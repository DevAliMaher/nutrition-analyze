import {
  AppDirType,
  AppLangType,
  AppThemeType,
} from 'src/app/core/models/app-states.model';

export class LangToggleAction {
  static readonly type = '[AppLang] Toggle Lang';
  constructor(public lang: AppLangType, public dir: AppDirType) {}
}

export class ThemeToggleAction {
  static readonly type = '[AppTheme] Toggle Theme';
  constructor(public theme: AppThemeType) {}
}
