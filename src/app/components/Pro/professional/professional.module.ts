import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfessionalRoutingModule } from './professional-routing.module';
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
import { ContactsComponent } from '../chats/contacts/contacts.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { MatIconModule } from '@angular/material/icon';
import { SocketIoModule } from 'ngx-socket-io';
import { ProNavComponent } from '../pro-nav/pro-nav.component';


@NgModule({
  declarations: [
    ProfessionalComponent,
    ProHomeComponent,
    ProLoginComponent,
    ProRegisterComponent,
    ProOtpComponent,
    ProForgotpasswordComponent,
    ProRenewpasswordComponent,
    ProbasicinfoComponent,
    ProbusinessdetailsComponent,
    ProprojectdetailsComponent,
    BusinessdetailslistComponent,
    ProprojectsingledetailsComponent,
    ProeditbasicinfoComponent,
    ProeditbusdetailsComponent,
    ProeditprodetailsComponent,
    ProprofileComponent,
    ChatsComponent,
    ContactsComponent,
    ProNavComponent
  ],
  imports: [
    CommonModule,
    ProfessionalRoutingModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    ToastrModule.forRoot(),
    SocketIoModule.forRoot({ url: 'http://localhost:3000' }),
  ]
})
export class ProfessionalModule { }
