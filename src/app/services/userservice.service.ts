import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  apiUrl: string = "http://localhost:3000"

  constructor(
    private http: HttpClient
  ) {}

  userRegister(user:any): Observable<any>{
    return this.http.post(`${this.apiUrl}/register`,user,httpOptions)
  }

  forgotPassword(mail:any): Observable<any>{
    return this.http.post(`${this.apiUrl}/forgotpassword`,mail,httpOptions)
  }

  homeActive(jwt:any): Observable<any>{
    return this.http.post(`${this.apiUrl}/active`,{jwt},httpOptions)
  }

  userLogin(user:any): Observable<any>{
    return this.http.post(`${this.apiUrl}/login`,user,httpOptions)
  }

  userReverification(user:any): Observable<any>{
    return this.http.post(`${this.apiUrl}/reverification`,user,httpOptions)
  }

  userVerification(id:any,otp:any): Observable<any>{
    return this.http.post(`${this.apiUrl}/verification?id=`+id,otp,httpOptions)
  }

  forgot(token:any,pass:any): Observable<any>{
    return this.http.post(`${this.apiUrl}/forgot/`+token,pass,httpOptions)
  }

  logout():Observable<any>{
    return this.http.post(`${this.apiUrl}/logout`,{},httpOptions)
  }

  loadbannertohome(): Observable<any>{
    return this.http.get(`${this.apiUrl}/loadbanner`,httpOptions)
  }

  loadFirm(): Observable<any>{
    return this.http.get(`${this.apiUrl}/loadfirms`,httpOptions);
  }

  loadFirmdetails(id:any): Observable<any>{
    return this.http.get(`${this.apiUrl}/loadFirmdetails?id=${id}`,httpOptions);
  }

  loadprojectdetails(id:any): Observable<any>{
    return this.http.get(`${this.apiUrl}/loadprojectdetails?id=${id}`,httpOptions);
  }

  loadsingleproject(id:any,name:string|null,address:string|null): Observable<any>{
    return this.http.get(`${this.apiUrl}/loadsingleproject?id=${id}&name=${name}&address=${address}`,httpOptions)
  }

  userchatlist(){
    return this.http.get(`${this.apiUrl}/userchat`)
  }

  chatconnection(id:any): Observable<any>{
    return this.http.post(`${this.apiUrl}/chatconnection?id=${id}`,{},httpOptions);
  }

  sentmessage(data: object): Observable<any>{
    return this.http.post(`${this.apiUrl}/message`,data,{withCredentials:true});
  }

  chatblock(id:string): Observable<any>{
    return this.http.get(`${this.apiUrl}/allmessages?id=${id}`,httpOptions)
  }

  savebooking(id:string,user:any): Observable<any>{
    return this.http.post(`${this.apiUrl}/booking?id=${id}`,user)
  }

  verifypayment(response:any,id:any): Observable<any>{
    return this.http.post(`${this.apiUrl}/verifypayment?id=${id}`,response)
  }

  profile(): Observable<any>{
    return this.http.get(`${this.apiUrl}/profile`)
  }

  loadbookings(): Observable<any>{
    return this.http.get(`${this.apiUrl}/loadbookings`)
  }

  savereview(id:any,formdata:any): Observable<any>{
    return this.http.post(`${this.apiUrl}/savereview?id=${id}`,formdata,{
      withCredentials:true
    })
  }

  loadreview(id:any): Observable<any>{
    return this.http.get(`${this.apiUrl}/loadreview?id=${id}`)
  }
}
