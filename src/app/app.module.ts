import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { UserserviceService } from './services/userservice.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UserListReducer, BannerListReducer, FirmsListReducer, ProListReducer, UserFirmReducer, BookingReducer } from './components/state/app.reducer';
import { appEffects } from './components/state/app.effects';
import { AdminserviceService } from './services/adminservice.service';
import { ProserviceService } from './services/proservice.service';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonInterceptor } from './common.interceptor';
import { SocketIoModule } from 'ngx-socket-io';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
// import { BookingComponent } from './components/User/booking/booking.component';
// import { BookinglistComponent } from './components/User/bookinglist/bookinglist.component';
// import { SearchpipePipe } from './components/User/searchpipe.pipe';
// import { HomeComponent } from './components/User/home/home.component';
// import { UsernavComponent } from './components/User/usernav/usernav.component';
// import { LoginComponent } from './components/User/login/login.component';
// import { RegisterComponent } from './components/User/register/register.component';
// import { ProLoginComponent } from './components/Pro/pro-login/pro-login.component';
// import { ProRegisterComponent } from './components/Pro/pro-register/pro-register.component';
// import { ProNavComponent } from './components/Pro/pro-nav/pro-nav.component';
// import { OtpComponent } from './components/User/otp/otp.component';
// import { FooterComponent } from './components/User/footer/footer.component';
// import { ProHomeComponent } from './components/Pro/pro-home/pro-home.component';
// import { AdminLoginComponent } from './components/Admin/admin-login/admin-login.component';
// import { DashboardComponent } from './components/Admin/dashboard/dashboard.component';
// import { ProOtpComponent } from './components/Pro/pro-otp/pro-otp.component';
// import { ForgotpasswordComponent } from './components/User/forgotpassword/forgotpassword.component';
// import { RenewpasswordComponent } from './components/User/renewpassword/renewpassword.component';
// import { ProForgotpasswordComponent } from './components/Pro/pro-forgotpassword/pro-forgotpassword.component';
// import { ProRenewpasswordComponent } from './components/Pro/pro-renewpassword/pro-renewpassword.component';
// import { AdminsidebarComponent } from './components/Admin/adminsidebar/adminsidebar.component';
// import { AdminnavComponent } from './components/Admin/adminnav/adminnav.component';
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
// import { PopUpComponent } from './components/User/pop-up/pop-up.component';
// import { UserprofileComponent } from './components/User/userprofile/userprofile.component';
// import { ProprofileComponent } from './components/Pro/proprofile/proprofile.component';
// import { BasicinfolistComponent } from './components/Pro/basicinfolist/basicinfolist.component';
// import { BusinessdetailslistComponent } from './components/Pro/businessdetailslist/businessdetailslist.component';
// import { ProprojectsingledetailsComponent } from './components/Pro/proprojectsingledetails/proprojectsingledetails.component';
// import { ProeditbasicinfoComponent } from './components/Pro/proeditbasicinfo/proeditbasicinfo.component';
// import { ProeditbusdetailsComponent } from './components/Pro/proeditbusdetails/proeditbusdetails.component';
// import { ProeditprodetailsComponent } from './components/Pro/proeditprodetails/proeditprodetails.component';
// import { ChatComponent } from './components/User/chat/chat.component';
// import { ContactComponent } from './components/User/chat/contact/contact.component';
// import { ContactsComponent } from './components/Pro/chats/contacts/contacts.component';
// import { ChatsComponent } from './components/Pro/chats/chats.component';

@NgModule({
  declarations: [
    AppComponent,
    PagenotfoundComponent,
    // SearchpipePipe,
    // HomeComponent,
    // UsernavComponent,
    // LoginComponent,
    // RegisterComponent,
    // ProLoginComponent,
    // ProRegisterComponent,
    // ProNavComponent,
    // OtpComponent,
    // FooterComponent,
    // ProHomeComponent,
    // AdminLoginComponent,
    // DashboardComponent,
    // ProOtpComponent,
    // ForgotpasswordComponent,
    // RenewpasswordComponent,
    // ProForgotpasswordComponent,
    // ProRenewpasswordComponent,
    // AdminsidebarComponent,
    // AdminnavComponent,
    // AdminaddbannerComponent,
    // AdminlistbannerComponent,
    // AdminuserlistComponent,
    // ProbasicinfoComponent,
    // ProbusinessdetailsComponent,
    // ProprojectdetailsComponent,
    // AdminfirmlistComponent,
    // AdminprofessionallistComponent,
    // AdmineditfirmlistComponent,
    // AdminverifybusinessComponent,
    // FirmlistComponent,
    // FirmdetailsComponent,
    // ProjectdetailsComponent,
    // PopUpComponent,
    // UserprofileComponent,
    // ProprofileComponent,
    // BasicinfolistComponent,
    // BusinessdetailslistComponent,
    // ProprojectsingledetailsComponent,
    // ProeditbasicinfoComponent,
    // ProeditbusdetailsComponent,
    // ProeditprodetailsComponent,
    // ChatComponent,
    // ChatsComponent,
    // ContactComponent,
    // ContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    StoreModule.forRoot({
      allUsers:UserListReducer,
      allBanners:BannerListReducer,
      allFirms:FirmsListReducer,
      allPro:ProListReducer,
      allUserFirms:UserFirmReducer,
      allBookings:BookingReducer
    }),
    SocketIoModule.forRoot({ url: 'https://globalarchi.online' }),
    EffectsModule.forRoot([appEffects])
  ],
  providers: [
    UserserviceService,
    AdminserviceService,
    ProserviceService,
    {provide: HTTP_INTERCEPTORS, useClass: CommonInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
