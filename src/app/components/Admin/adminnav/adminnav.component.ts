import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminserviceService } from 'src/app/services/adminservice.service';

@Component({
  selector: 'app-adminnav',
  templateUrl: './adminnav.component.html',
  styleUrls: ['./adminnav.component.css']
})
export class AdminnavComponent implements OnInit {

  name!: string;

  constructor(
    private http: HttpClient,
    private adminservice: AdminserviceService,
    private router: Router
  ){}

  ngOnInit(): void {
   
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

  logout():void {
    this.adminservice.logout()
    .subscribe(()=>{
      localStorage.removeItem('adminsession');
      this.router.navigate(['/admin/login']);
    })
  }
}
