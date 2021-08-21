export type AppLangType = 'ar' | 'en';

export type AppDirType = 'rtl' | 'ltr';

export type AppThemeType = 'light' | 'dark';

export interface AppSettingsModel {
  lang: AppLangType;
  dir: AppDirType;
  theme: AppThemeType;
}

export const InitialAppSettings: AppSettingsModel = {
  lang: 'en',
  dir: 'ltr',
  theme: 'dark',
};
