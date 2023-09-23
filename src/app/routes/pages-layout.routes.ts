import { Routes, RouterModule } from '@angular/router';

export const PAGES_ROUTES: Routes = [
  {
    path: 'home',
    loadChildren: () => import('../components/pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'login',
    loadChildren: () => import('../components/pages/login/login.module').then(m => m.LoginModule)
  },

  {
    path: 'error',
    loadChildren: () => import('../components/pages/error/error.module').then(m => m.ErrorModule)
  }
];

export const PagesLayoutRoutes = RouterModule.forChild(PAGES_ROUTES);
