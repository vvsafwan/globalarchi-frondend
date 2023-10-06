import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProserviceService } from 'src/app/services/proservice.service';

@Component({
  selector: 'app-businessdetailslist',
  templateUrl: './businessdetailslist.component.html',
  styleUrls: ['./businessdetailslist.component.css']
})
export class BusinessdetailslistComponent implements OnInit {

  jwt!:string|null;
  userid!:string;
  companyname!:string
  city!:string
  mobile!:string
  state!:string
  address!:string
  country!:string
  pincode!:string
  image!:string
  awards!:string;
  image2!:string;
  about!:string;
  budget!:string;
  costdetails!:string;
  website!:string;
  businessdescription!:string;
  projectdata:any[] = []

  constructor(
    private router: Router,
    private proservice: ProserviceService
  ){}

  ngOnInit(): void {
    this.jwt = localStorage.getItem('prosession');

    this.proservice.proActive(this.jwt)
    .subscribe((res)=>{
      this.userid = res._id
      this.proservice.loadfirmbasic(res._id)
      .subscribe((res)=>{
        this.companyname = res.companyname;
        this.city = res.city;
        this.mobile = res.mobile;
        this.state = res.state;
        this.address = res.address;
        this.country = res.country;
        this.pincode = res.pincode;
        this.image = res.image;
      })

      this.proservice.loaddetails(res._id)
      .subscribe((res)=>{
        if(res.website == ""){
          this.website = "NIL";
        }else{
          this.website = res.website;
        }
        if(res.awards == ""){
          this.awards = "NIL";
        }else{
          this.awards = res.awards;
        }
        this.image2 = res.image
        this.about = res.about
        this.budget = res.budget
        this.costdetails = res.costdetails
        this.businessdescription = res.businessdescription
      })

      this.proservice.loadprojectdetails(res._id)
      .subscribe((res)=>{
        this.projectdata = res;
      })
      
    })

    
  }

  projectdetails(id:string,name:string,address:string){
    this.router.navigate(['/pro/projectdetails',id,name,address]);
  }

  editbasicinfo(){
    this.router.navigate(['/pro/editbasicinfo',this.userid]);
  }

  editbusinessdetails(){
    this.router.navigate(['/pro/editbusdetails',this.userid]);
  }

}
