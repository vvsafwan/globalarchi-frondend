import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserGuard {

  constructor(public router: Router) {
  }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const token = localStorage.getItem('session');
    
    if(token){      
      this.router.navigate(['/']);
      return false;
    }else{
      return true;
    }
  }
}

@Injectable({
  providedIn: 'root'
})
export class UserGuardlet {

  constructor(public router: Router) {
  }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const token = localStorage.getItem('session');
    
    if(token===null){      
      this.router.navigate(['/login']);
      return false;
    }else{
      return true;
    }
  }
}

@Injectable({
  providedIn: 'root'
})

export class UserGuardcon implements CanActivate {

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const admintoken = localStorage.getItem('adminsession')
    const protoken = localStorage.getItem('prosession')
    if(admintoken){
      this.router.navigate(['/admin'])
      return false
    }else if (protoken) {
      this.router.navigate(['/pro']);
      return false;
   } else {
     return true;
   }
  }
}
