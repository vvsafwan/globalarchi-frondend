import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProGuard {

  constructor(public router: Router) {
  }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const token = localStorage.getItem('prosession');
    
    if(token){      
      this.router.navigate(['/pro']);
      return false;
    }else{
      return true;
    }
  }
}

@Injectable({
  providedIn: 'root'
})
export class ProGuardlet {

  constructor(public router: Router) {
  }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const token = localStorage.getItem('prosession');
    
    if(token===null){      
      this.router.navigate(['/pro/login']);
      return false;
    }else{
      return true;
    }
  }
}

@Injectable({
  providedIn: 'root'
})

export class ProGuardcon implements CanActivate {

  constructor(public router: Router) {
  }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const token = localStorage.getItem('session')
    const admintoken = localStorage.getItem('adminsession')
    if(admintoken){
      this.router.navigate(['/admin'])
      return false
    }else if (token) {
      this.router.navigate(['/']);
      return false;
   } else {
     return true;
   }
  }
}
