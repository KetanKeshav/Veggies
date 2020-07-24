import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupperAdminRoutingModule } from './supper-admin-routing.module';
import { SupperAdminComponent } from './supper-admin.component';


@NgModule({
  declarations: [SupperAdminComponent],
  imports: [
    CommonModule,
    SupperAdminRoutingModule
  ]
})
export class SupperAdminModule { }
