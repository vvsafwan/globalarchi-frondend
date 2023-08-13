import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard {

  constructor(public router: Router) {
  }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const token = localStorage.getItem('adminsession');
    
    if(token){      
      this.router.navigate(['/admin']);
      return false;
    }else{
      return true;
    }
  }
}

@Injectable({
  providedIn: 'root'
})
export class AdminGuardlet {

  constructor(public router: Router) {
  }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const token = localStorage.getItem('adminsession');
    
    if(token===null){      
      this.router.navigate(['/admin/login']);
      return false;
    }else{
      return true;
    }
  }
}

@Injectable({
  providedIn: 'root'
})
export class AdminGuardletcon {

  constructor(public router: Router) {
  }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      const session = localStorage.getItem('session')
      const protoken = localStorage.getItem('prosession')
      if(session){
        this.router.navigate(['/'])
        return false
      }else if (protoken) {
        this.router.navigate(['/pro']);
        return false;
     } else {
       return true;
     }
  }
}
