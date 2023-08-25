import { HttpClient } from '@angular/common/http';
import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-usernav',
  templateUrl: './usernav.component.html',
  styleUrls: ['./usernav.component.css']
})
export class UsernavComponent implements OnInit {
  name!: string;

  constructor(
    private http: HttpClient,
    private userservice: UserserviceService,
    private router: Router
  ){}

  ngOnInit(): void {
  }

  logout():void {
    this.userservice.logout()
    .subscribe(()=>{
      localStorage.removeItem('session');
      this.router.navigate(['/login'])
    })
  }

  header_variable = false;
  @HostListener("document:scroll")
  scrollfunction(){
    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
      this.header_variable = true;
    }else{
      this.header_variable = false
    }
  }

}
