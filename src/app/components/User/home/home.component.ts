import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private userservice: UserserviceService
  ){}

  bannerdata:any[] = [];
  name!: string;
  image!:string;
  header!:string;
  description!:string;
  
  ngOnInit(): void {
    const jwt = localStorage.getItem('session');

    this.userservice.loadbannertohome()
    .subscribe((res)=>{
      for(let i=1;i<res.length;i++){
        this.bannerdata.push(res[i])
      }
      this.image = res[0].image;
      this.header = res[0].header;
      this.description = res[0].description;
      
    })
  }

}
