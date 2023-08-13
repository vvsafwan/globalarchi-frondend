import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { OtpComponent } from '../otp/otp.component';
import { ForgotpasswordComponent } from '../forgotpassword/forgotpassword.component';
import { RenewpasswordComponent } from '../renewpassword/renewpassword.component';
import { FirmlistComponent } from '../firmlist/firmlist.component';
import { FirmdetailsComponent } from '../firmdetails/firmdetails.component';
import { ProjectdetailsComponent } from '../projectdetails/projectdetails.component';
import { UserprofileComponent } from '../userprofile/userprofile.component';
import { ChatComponent } from '../chat/chat.component';
import { UserGuard, UserGuardlet } from '../../guards/user-guard.guard';
import { BookingComponent } from '../booking/booking.component';
import { BookinglistComponent } from '../bookinglist/bookinglist.component';
import { ReviewComponent } from '../review/review.component';

const routes: Routes = [
  {path:'',component:HomeComponent,canActivate:[UserGuardlet]},
  {path:'login',component:LoginComponent,canActivate:[UserGuard]},
  {path:'register',component:RegisterComponent},
  {path:'verify/:id',component:OtpComponent},
  {path:'forgotpassword',component:ForgotpasswordComponent},
  {path:'renewpassword/:token',component:RenewpasswordComponent},
  {path:'firmlist',component:FirmlistComponent,canActivate:[UserGuardlet]},
  {path:'firmdetails/:id',component:FirmdetailsComponent,canActivate:[UserGuardlet]},
  {path:'projectdetails/:id/:name/:address',component:ProjectdetailsComponent,canActivate:[UserGuardlet]},
  {path:'profile',component:UserprofileComponent,canActivate:[UserGuardlet]},
  {path:'chats',component:ChatComponent,canActivate:[UserGuardlet]},
  {path:'booking/:id',component:BookingComponent,canActivate:[UserGuardlet]},
  {path:'bookinglist',component:BookinglistComponent,canActivate:[UserGuardlet]},
  {path:'review/:id',component:ReviewComponent,canActivate:[UserGuardlet]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
