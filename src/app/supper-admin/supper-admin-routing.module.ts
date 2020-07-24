import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SupperAdminComponent } from './supper-admin.component';

const routes: Routes = [{ path: '', component: SupperAdminComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupperAdminRoutingModule { }
