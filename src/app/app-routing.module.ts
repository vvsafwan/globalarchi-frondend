import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
// import { LoginComponent } from './components/User/login/login.component';
// import { RegisterComponent } from './components/User/register/register.component';
// import { ProLoginComponent } from './components/Pro/pro-login/pro-login.component';
// import { ProRegisterComponent } from './components/Pro/pro-register/pro-register.component';
// import { OtpComponent } from './components/User/otp/otp.component';
// import { HomeComponent } from './components/User/home/home.component';
// import { ProHomeComponent } from './components/Pro/pro-home/pro-home.component';
// import { DashboardComponent } from './components/Admin/dashboard/dashboard.component';
// import { AdminLoginComponent } from './components/Admin/admin-login/admin-login.component';
// import { ProOtpComponent } from './components/Pro/pro-otp/pro-otp.component';
// import { ForgotpasswordComponent } from './components/User/forgotpassword/forgotpassword.component';
// import { RenewpasswordComponent } from './components/User/renewpassword/renewpassword.component';
// import { ProForgotpasswordComponent } from './components/Pro/pro-forgotpassword/pro-forgotpassword.component';
// import { ProRenewpasswordComponent } from './components/Pro/pro-renewpassword/pro-renewpassword.component';
// import { AdminaddbannerComponent } from './components/Admin/adminaddbanner/adminaddbanner.component';
// import { AdminlistbannerComponent } from './components/Admin/adminlistbanner/adminlistbanner.component';
// import { AdminuserlistComponent } from './components/Admin/adminuserlist/adminuserlist.component';
// import { ProbasicinfoComponent } from './components/Pro/probasicinfo/probasicinfo.component';
// import { ProbusinessdetailsComponent } from './components/Pro/probusinessdetails/probusinessdetails.component';
// import { ProprojectdetailsComponent } from './components/Pro/proprojectdetails/proprojectdetails.component';
// import { AdminfirmlistComponent } from './components/Admin/adminfirmlist/adminfirmlist.component';
// import { AdminprofessionallistComponent } from './components/Admin/adminprofessionallist/adminprofessionallist.component';
// import { AdmineditfirmlistComponent } from './components/Admin/admineditfirmlist/admineditfirmlist.component';
// import { AdminverifybusinessComponent } from './components/Admin/adminverifybusiness/adminverifybusiness.component';
// import { FirmlistComponent } from './components/User/firmlist/firmlist.component';
// import { FirmdetailsComponent } from './components/User/firmdetails/firmdetails.component';
// import { ProjectdetailsComponent } from './components/User/projectdetails/projectdetails.component';
// import { UserprofileComponent } from './components/User/userprofile/userprofile.component';
// import { ProprofileComponent } from './components/Pro/proprofile/proprofile.component';
// import { BusinessdetailslistComponent } from './components/Pro/businessdetailslist/businessdetailslist.component';
// import { ProprojectsingledetailsComponent } from './components/Pro/proprojectsingledetails/proprojectsingledetails.component';
// import { ProeditbasicinfoComponent } from './components/Pro/proeditbasicinfo/proeditbasicinfo.component';
// import { ProeditbusdetailsComponent } from './components/Pro/proeditbusdetails/proeditbusdetails.component';
// import { ProeditprodetailsComponent } from './components/Pro/proeditprodetails/proeditprodetails.component';
// import { ChatComponent } from './components/User/chat/chat.component';
// import { ChatsComponent } from './components/Pro/chats/chats.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./components/User/user/user.module').then(m => m.UserModule) },
  { path: 'pro', loadChildren: () => import('./components/Pro/professional/professional.module').then(m => m.ProfessionalModule) },
  { path: 'admin', loadChildren: () => import('./components/Admin/admin/admin.module').then(m => m.AdminModule) },
  { path:'**', component:PagenotfoundComponent }
  // {path:'',component:HomeComponent},
  // {path:'login',component:LoginComponent},
  // {path:'register',component:RegisterComponent},
  // {path:'verify/:id',component:OtpComponent},
  // {path:'forgotpassword',component:ForgotpasswordComponent},
  // {path:'renewpassword/:token',component:RenewpasswordComponent},
  // {path:'firmlist',component:FirmlistComponent},
  // {path:'firmdetails/:id',component:FirmdetailsComponent},
  // {path:'projectdetails/:id/:name/:address',component:ProjectdetailsComponent},
  // {path:'profile',component:UserprofileComponent},
  // {path:'chats',component:ChatComponent},
  // {path:'pro',
  // children:[
  //     {path:'',component:ProHomeComponent},
  //     {path:'login',component:ProLoginComponent},
  //     {path:'register',component:ProRegisterComponent},
  //     {path:'verify/:id',component:ProOtpComponent},
  //     {path:'forgotpassword',component:ProForgotpasswordComponent},
  //     {path:'renewpassword/:token',component:ProRenewpasswordComponent},
  //     {path:'addbasicinfo',component:ProbasicinfoComponent},
  //     {path:'businessdetails',component:ProbusinessdetailsComponent},
  //     {path:'projectdetails',component:ProprojectdetailsComponent},
  //     {path:'firmdetailslist',component:BusinessdetailslistComponent},
  //     {path:'projectdetails/:id/:name/:address',component:ProprojectsingledetailsComponent},
  //     {path:'editbasicinfo/:id',component:ProeditbasicinfoComponent},
  //     {path:'editbusdetails/:id',component:ProeditbusdetailsComponent},
  //     {path:'editprojectdetails/:id/:name/:address',component:ProeditprodetailsComponent},
  //     {path:'profile',component:ProprofileComponent},
  //     {path:'chat',component:ChatsComponent},
  //   ]
  // },
  // {path:'admin',
  //   children:[
  //     {path:'',component:DashboardComponent},
  //     {path:'login',component:AdminLoginComponent},
  //     {path:'addbanner',component:AdminaddbannerComponent},
  //     {path:'listbanner',component:AdminlistbannerComponent},
  //     {path:'userlist',component:AdminuserlistComponent},
  //     {path:'firmlist',component:AdminfirmlistComponent},
  //     {path:'professionallist',component:AdminprofessionallistComponent},
  //     {path:'editfirmlist/:id',component:AdmineditfirmlistComponent},
  //     {path:'verifybusiness/:id',component:AdminverifybusinessComponent},
  //   ]
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
