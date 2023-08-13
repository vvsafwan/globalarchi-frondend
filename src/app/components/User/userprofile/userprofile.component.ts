import { Component } from '@angular/core';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent {

  constructor(
    private userservice: UserserviceService
  ){}

  name!:string;
  email!:string;
  mobile!:number;

  ngOnInit(): void {
    this.userservice.profile()
    .subscribe((res)=>{
      console.log(res);
      
      this.name = res.name;
      this.email = res.email;
      this.mobile = res.mobile
    })
  }

}
