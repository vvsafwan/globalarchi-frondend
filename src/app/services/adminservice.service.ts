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
export class AdminserviceService {

  apiUrl: string = "http://localhost:3000/admin"

  constructor(
    private http: HttpClient
  ) { }

  adminLogin(user:any): Observable<any>{
    return this.http.post(`${this.apiUrl}/login`,user,httpOptions)
  }

  addbanner(formdata:any): Observable<any>{
    return this.http.post(`${this.apiUrl}/addbanner`,formdata)
  }

  loadUsers(): Observable<any>{
    return this.http.get(`${this.apiUrl}/loadUsers`,{
      withCredentials:true
    })
  }

  blockUser(id:string): Observable<any>{
    return this.http.post(`${this.apiUrl}/blockuser?id=${id}`,{},{
      withCredentials:true
    });
  }

  unBlockUser(id:string): Observable<any>{
    return this.http.post(`${this.apiUrl}/unblockuser?id=${id}`,{},{
      withCredentials:true
    });
  }

  loadBanners(): Observable<any>{
    return this.http.get(`${this.apiUrl}/loadBanners`,{
      withCredentials:true
    })
  }

  UnlistBanner(id:string): Observable<any>{
    return this.http.post(`${this.apiUrl}/unlistbanner?id=${id}`,{},{
      withCredentials:true
    })
  }

  ListBanner(id:string): Observable<any>{
    return this.http.post(`${this.apiUrl}/listbanner?id=${id}`,{},{
      withCredentials:true
    })
  }

  Active(jwt:any): Observable<any>{
    return this.http.post(`${this.apiUrl}/active`,{jwt},httpOptions);
  }

  logout(): Observable<any>{
    return this.http.post(`${this.apiUrl}/logout`,httpOptions)
  }

  loadFirms(): Observable<any>{
    return this.http.get(`${this.apiUrl}/loadFirms`,{
      withCredentials:true
    })
  }

  blockFirm(id:string): Observable<any>{
    return this.http.patch(`${this.apiUrl}/blockfirm?id=${id}`,{},{
      withCredentials:true
    });
  }

  unBlockFirm(id:string): Observable<any>{
    return this.http.patch(`${this.apiUrl}/unblockfirm?id=${id}`,{},{
      withCredentials:true
    });
  }

  loadPro(): Observable<any>{
    return this.http.get(`${this.apiUrl}/loadPro`,{
      withCredentials:true
    })
  }

  blockPro(id:string): Observable<any>{
    return this.http.patch(`${this.apiUrl}/blockPro?id=${id}`,{},{
      withCredentials:true
    });
  }

  unBlockPro(id:string): Observable<any>{
    return this.http.patch(`${this.apiUrl}/unblockPro?id=${id}`,{},{
      withCredentials:true
    });
  }

  firmdetails(jwt:any): Observable<any>{
    return this.http.post(`${this.apiUrl}/firmdetails`,{jwt},{
      withCredentials:true
    })
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

  loadbusinessdetails(id:any): Observable<any>{
    return this.http.get(`${this.apiUrl}/loadbusinessdetails?id=${id}`,{
      withCredentials:true
    })
  }

  verifybusinessdetails(id:any): Observable<any>{
    return this.http.post(`${this.apiUrl}/verifybus?id=${id}`,{
      withCredentials:true
    })
  }

  unverifybusinessdetails(id:any): Observable<any>{
    return this.http.post(`${this.apiUrl}/unverifybus?id=${id}`,{
      withCredentials:true
    })
  }

  loaddatas(): Observable<any>{
    return this.http.get(`${this.apiUrl}/loaddatas`,{
      withCredentials:true
    })
  }

  loadBookings(): Observable<any>{
    return this.http.get(`${this.apiUrl}/loadBookings`,{
      withCredentials:true
    })
  }

}
