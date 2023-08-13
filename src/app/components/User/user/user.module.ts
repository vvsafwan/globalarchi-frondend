import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
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
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { ToastrModule } from 'ngx-toastr';
import { SocketIoModule } from 'ngx-socket-io';
import { UsernavComponent } from '../usernav/usernav.component';
import { ContactComponent } from '../chat/contact/contact.component';
import { SearchpipePipe } from '../searchpipe.pipe';
import { FooterComponent } from '../footer/footer.component';
import { ReviewComponent } from '../review/review.component';


@NgModule({
  declarations: [
    UserComponent,
    HomeComponent,
    UsernavComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    OtpComponent,
    ForgotpasswordComponent,
    RenewpasswordComponent,
    FirmlistComponent,
    FirmdetailsComponent,
    ProjectdetailsComponent,
    UserprofileComponent,
    ChatComponent,
    SearchpipePipe,
    FooterComponent,
    ReviewComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    ToastrModule.forRoot(),
    SocketIoModule.forRoot({ url: 'http://localhost:3000' }),
  ],
  
})
export class UserModule { }
