import { Component, OnInit } from '@angular/core';
import { ProserviceService } from 'src/app/services/proservice.service';

@Component({
  selector: 'app-proprofile',
  templateUrl: './proprofile.component.html',
  styleUrls: ['./proprofile.component.css']
})
export class ProprofileComponent implements OnInit {
  constructor(
    private proservice: ProserviceService,
  ){}

  name!:string;
  email!:string;
  mobile!:number;

  ngOnInit(): void {
    this.proservice.proprofile()
    .subscribe((res)=>{
      console.log(res);
      
      this.name = res.name;
      this.email = res.email;
      this.mobile = res.mobile
    })
  }
}
