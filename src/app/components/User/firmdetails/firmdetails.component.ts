import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserserviceService } from 'src/app/services/userservice.service';
// declare var Razorpay: any;
@Component({
  selector: 'app-firmdetails',
  templateUrl: './firmdetails.component.html',
  styleUrls: ['./firmdetails.component.css']
})
export class FirmdetailsComponent implements OnInit {

  constructor(
    private userservice: UserserviceService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  userid!:string;
  website!:string;
  budget!:string;
  about!:string;
  costdetails!:string;
  businessdescription!:string;
  image!:string;
  awards!:string;
  companyname!:string;
  city!:string;
  state!:string;
  country!:string;
  mobile!:number;
  pincode!:any;
  address!:string;
  projectdata:any[] = [];
  reviewdata:any[] = [];
  firmdetails:any[] = [];
  selectedRating:any;
  maxRating = 5;
  stars: number[] = Array(this.maxRating).fill(0);

  ngOnInit(): void {
    const jwt = localStorage.getItem('session');

    const id = this.route.snapshot.paramMap.get('id');
    this.userservice.loadFirmdetails(id)
    .subscribe((res)=>{
      if(res.firmdetails.website == ""){
        this.website = "NIL";
      }else{
        this.website = res.firmdetails.website;
      }
      if(res.firmdetails.awards == ""){
        this.awards = "NIL";
      }else{
        this.awards = res.firmdetails.awards;
      }
      this.userid = res.firmdetails.userid;
      this.budget = res.firmdetails.budget;
      this.about = res.firmdetails.about;
      this.costdetails = res.firmdetails.costdetails;
      this.businessdescription = res.firmdetails.businessdescription;
      this.image = res.basicdetails.image;
      this.companyname = res.basicdetails.companyname;
      this.city = res.basicdetails.city;
      this.state = res.basicdetails.state;
      this.country = res.basicdetails.country;
      this.address = res.basicdetails.address;
      this.pincode = res.basicdetails.pincode;
      this.mobile = res.basicdetails.mobile;
    })

    this.userservice.loadprojectdetails(id)
    .subscribe((res)=>{
      this.projectdata = res;      
    })

    this.userservice.loadreview(id)
    .subscribe((res)=>{
      this.reviewdata = res;
    })
  }

  projectdetails(id:any,name:string,address:string){
    this.router.navigate(['/projectdetails',id,name,address]);
  }

  BookNow(userid:string){
    this.router.navigate(['/booking',userid]);
  }
}
