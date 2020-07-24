import { AuthGuardService } from './auth/auth.guard.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'signin',
    loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)
  },
  { 
    path: 'products', 
    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) 
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canActivate: [AuthGuardService], 
    data: { 
      expectedRole: 'admin'
    }
  },
  { path: 'superAdmin', 
    loadChildren: () => import('./supper-admin/supper-admin.module').then(m => m.SupperAdminModule),
    canActivate: [AuthGuardService], 
    data: { 
      expectedRole: 'superadmin'
    }
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
