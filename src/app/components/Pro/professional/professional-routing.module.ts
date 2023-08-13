import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfessionalComponent } from './professional.component';
import { ProHomeComponent } from '../pro-home/pro-home.component';
import { ProLoginComponent } from '../pro-login/pro-login.component';
import { ProRegisterComponent } from '../pro-register/pro-register.component';
import { ProOtpComponent } from '../pro-otp/pro-otp.component';
import { ProForgotpasswordComponent } from '../pro-forgotpassword/pro-forgotpassword.component';
import { ProRenewpasswordComponent } from '../pro-renewpassword/pro-renewpassword.component';
import { ProbasicinfoComponent } from '../probasicinfo/probasicinfo.component';
import { ProbusinessdetailsComponent } from '../probusinessdetails/probusinessdetails.component';
import { ProprojectdetailsComponent } from '../proprojectdetails/proprojectdetails.component';
import { BusinessdetailslistComponent } from '../businessdetailslist/businessdetailslist.component';
import { ProprojectsingledetailsComponent } from '../proprojectsingledetails/proprojectsingledetails.component';
import { ProeditbasicinfoComponent } from '../proeditbasicinfo/proeditbasicinfo.component';
import { ProeditbusdetailsComponent } from '../proeditbusdetails/proeditbusdetails.component';
import { ProeditprodetailsComponent } from '../proeditprodetails/proeditprodetails.component';
import { ProprofileComponent } from '../proprofile/proprofile.component';
import { ChatsComponent } from '../chats/chats.component';
import { ProGuard, ProGuardcon, ProGuardlet } from '../../guards/pro-guard.guard';
import { ProBookinglistComponent } from '../pro-bookinglist/pro-bookinglist.component';

const routes: Routes = [
  {path:'',component:ProHomeComponent,canActivate:[ProGuardlet]},
  {path:'login',component:ProLoginComponent,canActivate:[ProGuard,ProGuardcon]},
  {path:'register',component:ProRegisterComponent},
  {path:'verify/:id',component:ProOtpComponent},
  {path:'forgotpassword',component:ProForgotpasswordComponent},
  {path:'renewpassword/:token',component:ProRenewpasswordComponent},
  {path:'addbasicinfo',component:ProbasicinfoComponent,canActivate:[ProGuardlet]},
  {path:'businessdetails',component:ProbusinessdetailsComponent,canActivate:[ProGuardlet]},
  {path:'projectdetails',component:ProprojectdetailsComponent,canActivate:[ProGuardlet]},
  {path:'firmdetailslist',component:BusinessdetailslistComponent,canActivate:[ProGuardlet]},
  {path:'projectdetails/:id/:name/:address',component:ProprojectsingledetailsComponent,canActivate:[ProGuardlet]},
  {path:'editbasicinfo/:id',component:ProeditbasicinfoComponent,canActivate:[ProGuardlet]},
  {path:'editbusdetails/:id',component:ProeditbusdetailsComponent,canActivate:[ProGuardlet]},
  {path:'editprojectdetails/:id/:name/:address',component:ProeditprodetailsComponent,canActivate:[ProGuardlet]},
  {path:'profile',component:ProprofileComponent,canActivate:[ProGuardlet]},
  {path:'chat',component:ChatsComponent,canActivate:[ProGuardlet]},
  {path:'bookings',component:ProBookinglistComponent,canActivate:[ProGuardlet]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfessionalRoutingModule { }
