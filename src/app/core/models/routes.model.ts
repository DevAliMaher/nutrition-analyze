export interface AppRoutesModel {
  route: string | null;
  title: string;
  icon: string;
  order?: number;
}

export const MainRoutesData: AppRoutesModel[] = [
  { route: 'home', title: 'home', icon: 'home', order: 1 },
  {
    route: 'analyze-meal',
    title: 'analyze-meal',
    icon: 'analytics',
    order: 2,
  },
];
