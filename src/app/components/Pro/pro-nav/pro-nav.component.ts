import { HttpClient } from '@angular/common/http';
import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { ProserviceService } from 'src/app/services/proservice.service';

@Component({
  selector: 'app-pro-nav',
  templateUrl: './pro-nav.component.html',
  styleUrls: ['./pro-nav.component.css']
})
export class ProNavComponent implements OnInit {

  name!: string;

  constructor(
    private http: HttpClient,
    private proservice: ProserviceService,
    private router: Router
  ){}

  ngOnInit(): void {
  }

  logout():void {
    this.proservice.logout()
    .subscribe(()=>{
      localStorage.removeItem('prosession');
      this.router.navigate(['/pro/login'])
      // this.auth = false
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
