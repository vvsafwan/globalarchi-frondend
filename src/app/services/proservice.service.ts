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
export class ProserviceService {

  apiUrl: string = "http://localhost:3000/pro"

  constructor(
    private http: HttpClient
  ) { }

  forgotPassword(mail:any): Observable<any>{
    return this.http.post(`${this.apiUrl}/forgotpassword`,mail,httpOptions)
  }

  proLogin(user:any): Observable<any>{
    return this.http.post(`${this.apiUrl}/login`,user,httpOptions)
  }

  proReverification(user:any): Observable<any>{
    return this.http.post(`${this.apiUrl}/reverification`,user,httpOptions)
  }

  proActive(jwt:any): Observable<any>{
    return this.http.post(`${this.apiUrl}/active`,{jwt},httpOptions)
  }

  logout(): Observable<any>{
    return this.http.post(`${this.apiUrl}/logout`,{},httpOptions)
  }

  verification(id:any,otp:any): Observable<any>{
    return this.http.post(`${this.apiUrl}/verification?id=`+id,otp,httpOptions)
  }

  proRegister(user:any): Observable<any>{
    return this.http.post(`${this.apiUrl}/register`,user,httpOptions)
  }

  forgot(token:any,password:any): Observable<any>{
    return this.http.post(`${this.apiUrl}/forgot/`+token,password,httpOptions)
  }

  addbasicinfo(formdata:any,id:any): Observable<any>{
    return this.http.post(`${this.apiUrl}/basicinfo?id=${id}`,formdata);
  }

  addbusinessdetails(formdata:any,id:any): Observable<any>{
    return this.http.post(`${this.apiUrl}/businessdetails?id=${id}`,formdata);
  }

  addprojectdetails(formdata:any,id:any): Observable<any>{
    return this.http.post(`${this.apiUrl}/projectdetails?id=${id}`,formdata);
  }

  loadfirmbasic(id:any): Observable<any>{    
    return this.http.get(`${this.apiUrl}/loadfirmbasic?id=${id}`,{
      withCredentials:true
    });
  }
  
  loaddetails(id:any): Observable<any>{    
    return this.http.get(`${this.apiUrl}/loaddetails?id=${id}`,{
      withCredentials:true
    });
  }

  loadprojectdetails(id:any): Observable<any>{    
    return this.http.get(`${this.apiUrl}/loadprojectdetails?id=${id}`,{
      withCredentials:true
    });
  }

  loadsingleproject(id:any,name:string|null,address:string|null): Observable<any>{
    return this.http.get(`${this.apiUrl}/loadsingleproject?id=${id}&name=${name}&address=${address}`,httpOptions)
  }

  loadfirmdetails(id:any): Observable<any>{
    return this.http.get(`${this.apiUrl}/loadfirmdetails?id=${id}`,{
      withCredentials:true
    })
  }

  updateinfo(formdata:any,id:any): Observable<any>{
    return this.http.post(`${this.apiUrl}/updatebasicfirm?id=${id}`,formdata,{
      withCredentials:true
    })
  }

  loadbusdetails(id:any): Observable<any>{
    return this.http.get(`${this.apiUrl}/loadbusdetails?id=${id}`,{
      withCredentials:true
    })
  }

  editbusdetails(formdata:any,id:any): Observable<any>{
    return this.http.post(`${this.apiUrl}/updatebusdetails?id=${id}`,formdata,{
      withCredentials:true
    })
  }

  editprojectdetails(formdata:any,id:string,name:any,address:any){
    return this.http.post(`${this.apiUrl}/editproject?id=${id}&name=${name}&address=${address}`,formdata)
  }

  loadsingleproject2(id:any,name:string|null,address:string|null): Observable<any>{
    return this.http.get(`${this.apiUrl}/loadsingleproject?id=${id}&name=${name}&address=${address}`,httpOptions)
  }

  professionalchatlist(): Observable<any>{
    return this.http.get(`${this.apiUrl}/professionalchatlist`)
  }

  chatblock(id:string): Observable<any>{
    return this.http.get(`${this.apiUrl}/findchat?id=${id}`)
  }

  sendmessage(data:object): Observable<any>{
    return this.http.post(`${this.apiUrl}/message`,data)
  }

  proprofile(): Observable<any>{
    return this.http.get(`${this.apiUrl}/proprofile`)
  }

  loadprobookings(): Observable<any>{
    return this.http.get(`${this.apiUrl}/loadprobookings`)
  }

  loaduserprofile(id:string): Observable<object>{
    return this.http.get<object>(`${this.apiUrl}/loaduserprofile?id=${id}`)
  }

  loadmyimg(): Observable<object>{
    return this.http.get<object>(`${this.apiUrl}/loadmyimg`)
  }

}
