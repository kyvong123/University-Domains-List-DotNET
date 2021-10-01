import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';

// Import Containers
import { DefaultLayoutComponent } from './containers';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    // canActivate: [AuthGuard],
    pathMatch: 'full',
    // canActivate:[AuthGuard]
  },
  // {
  //   path: 'admin',
  //   component: AdminComponent,
  //   canActivate: [AuthGuard]
  // },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    canActivate:[AuthGuard],
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        // loadChildren:'./views/dashboard/dashboard.module#DashBoardModule'
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      }// },
      ,{
        path: 'cardlist',
        loadChildren: () => import('./views/card-list/card-list.module').then(mt => mt.CardListModule)
      },
      {
        path: 'newsletter1',
        loadChildren: () => import('./views/newsletter1/newsletter1.modules').then(mt => mt.NewsLetter1Module)
      }
    
           
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
