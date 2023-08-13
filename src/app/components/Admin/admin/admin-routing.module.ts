import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { AdminGuard, AdminGuardlet } from '../../guards/admin-guard.guard';
import { AdminbookingsComponent } from '../adminbookings/adminbookings.component';

const routes: Routes = [
  {path:'',component:DashboardComponent,canActivate:[AdminGuardlet]},
  {path:'login',component:AdminLoginComponent,canActivate:[AdminGuard]},
  {path:'addbanner',component:AdminaddbannerComponent,canActivate:[AdminGuardlet]},
  {path:'listbanner',component:AdminlistbannerComponent,canActivate:[AdminGuardlet]},
  {path:'userlist',component:AdminuserlistComponent,canActivate:[AdminGuardlet]},
  {path:'firmlist',component:AdminfirmlistComponent,canActivate:[AdminGuardlet]},
  {path:'professionallist',component:AdminprofessionallistComponent,canActivate:[AdminGuardlet]},
  {path:'editfirmlist/:id',component:AdmineditfirmlistComponent,canActivate:[AdminGuardlet]},
  {path:'verifybusiness/:id',component:AdminverifybusinessComponent,canActivate:[AdminGuardlet]},
  {path:'bookings',component:AdminbookingsComponent,canActivate:[AdminGuardlet]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
