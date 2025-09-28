import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';

import { NotFounPage } from 'pages/NotFounPage';

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig = [
  {
    name: AppRoutes.MAIN,
    path: RoutePath.main,
    element: <MainPage />,
  },
  {
    name: AppRoutes.ABOUT,
    path: RoutePath.about,
    element: <AboutPage />,
  },
  {
    name: AppRoutes.NOT_FOUND,
    path: RoutePath.not_found,
    element: <NotFounPage />,
  },
];
