import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AdminLoginComponent } from '../admin-login/admin-login.component';
import { AdminaddbannerComponent } from '../adminaddbanner/adminaddbanner.component';
import { AdminlistbannerComponent } from '../adminlistbanner/adminlistbanner.component';
import { AdminuserlistComponent } from '../adminuserlist/adminuserlist.component';
import { AdminfirmlistComponent } from '../adminfirmlist/adminfirmlist.component';
import { AdminprofessionallistComponent } from '../adminprofessionallist/adminprofessionallist.component';
import { AdmineditfirmlistComponent } from '../admineditfirmlist/admineditfirmlist.component';
import { AdminverifybusinessComponent } from '../adminverifybusiness/adminverifybusiness.component';
import { AdminsidebarComponent } from '../adminsidebar/adminsidebar.component';
import { AdminnavComponent } from '../adminnav/adminnav.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { ToastrModule } from 'ngx-toastr';
import { AdminbookingsComponent } from '../adminbookings/adminbookings.component';


@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    AdminLoginComponent,
    AdminaddbannerComponent,
    AdminlistbannerComponent,
    AdminuserlistComponent,
    AdminfirmlistComponent,
    AdminprofessionallistComponent,
    AdmineditfirmlistComponent,
    AdminverifybusinessComponent,
    AdminverifybusinessComponent,
    AdminsidebarComponent,
    AdminnavComponent,
    AdminbookingsComponent,

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    ToastrModule.forRoot(),
  ]
})
export class AdminModule { }
