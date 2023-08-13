import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminserviceService } from 'src/app/services/adminservice.service';

@Component({
  selector: 'app-adminverifybusiness',
  templateUrl: './adminverifybusiness.component.html',
  styleUrls: ['./adminverifybusiness.component.css']
})
export class AdminverifybusinessComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private adminservice: AdminserviceService,
    private toastr: ToastrService
  ){}

  jwt!: string|null;

  website:any;
  budget:any;
  about:any; 
  costdetails:any;
  businessdescription:any;
  image:any;
  awards:any;
  _id:any;
  is_varified:any;

  ngOnInit(): void {

    this.jwt = localStorage.getItem('adminsession');

    const id = this.route.snapshot.paramMap.get('id');
    
    this.adminservice.loadbusinessdetails(id)
    .subscribe((res)=>{
      console.log(res);
      
      if(res.website!=""){
        this.website = res.website;
      }else{
        this.website = "NIL";
      }
      this.is_varified = res.is_varified;
      this._id = res._id;
      this.budget = res.budget;
      this.about = res.about;
      this.costdetails = res.costdetails;
      this.businessdescription = res.businessdescription;
      this.image = res.image;
      if(res.awards!=""){
        this.awards = res.awards;
      }else{
        this.awards = "NIL";
      }
    },
    (err)=>{
      this.toastr.error("Something went wrong");
    }
    )
    
  } 

  verifyfirm(id:any){
    this.adminservice.verifybusinessdetails(id)    
    .subscribe(()=>{
      this.toastr.success("Firm verified successfully");
      this.is_varified = true;
    },
    (err)=>{
      this.toastr.error("Something went wrong")
    })
  }

  unverifyfirm(id:any){
    this.adminservice.unverifybusinessdetails(id)    
    .subscribe(()=>{
      this.toastr.success("Firm Unverified successfully");
      this.is_varified = false;
    },
    (err)=>{
      this.toastr.error("Something went wrong")
    })
  }

}
