import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProserviceService } from 'src/app/services/proservice.service';

@Component({
  selector: 'app-probasicinfo',
  templateUrl: './probasicinfo.component.html',
  styleUrls: ['./probasicinfo.component.css']
})
export class ProbasicinfoComponent implements OnInit {

  basicinfoForm!: FormGroup;
  invalid: boolean = false;
  selectedFile:any|File = null;
  jwt!: string|null;
  userid!: string;

  constructor(
    private proservice: ProserviceService,
    private toastr: ToastrService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.basicinfoForm = new FormGroup({
      companyname: new FormControl("",[
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20)
      ]),
      city: new FormControl("",[
        Validators.required
      ]),
      mobile: new FormControl("",[
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
        Validators.pattern("[0-9]*")
      ]),
      address: new FormControl("",[
        Validators.required
      ]),
      state: new FormControl("",[
        Validators.required
      ]),
      country: new FormControl("",[
        Validators.required
      ]),
      pincode: new FormControl("",[
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(6)
      ]),
      image: new FormControl("",[
        Validators.required
      ])
    })

    this.jwt = localStorage.getItem('prosession');
    
    // if(this.jwt){
    //   ProEmitter.authEmitter.emit(true);
    //   this.router.navigate(['/pro/addbasicinfo']);
    // }else{
    //   ProEmitter.authEmitter.emit(false);
    //   this.router.navigate(['/pro/login']);
    // }
  }

  get companyname(): FormControl {
    return this.basicinfoForm.get("companyname") as FormControl
  }

  get city(): FormControl {
    return this.basicinfoForm.get("city") as FormControl
  }

  get mobile(): FormControl {
    return this.basicinfoForm.get("mobile") as FormControl
  }

  get address(): FormControl {
    return this.basicinfoForm.get("address") as FormControl
  }

  get state(): FormControl {
    return this.basicinfoForm.get("state") as FormControl
  }

  get country(): FormControl {
    return this.basicinfoForm.get("country") as FormControl
  }

  get pincode(): FormControl {
    return this.basicinfoForm.get("pincode") as FormControl
  }

  get image(): FormControl {
    return this.basicinfoForm.get("image") as FormControl
  }

  onFileSelected(event:any) {
    this.selectedFile = <File>event.target.files[0]
  }

  basicinfoSubmit(){
    const formdetails = this.basicinfoForm.getRawValue();
    const formdata = new FormData();
    formdata.append('companyname',formdetails.companyname);
    formdata.append('city',formdetails.city);
    formdata.append('mobile',formdetails.mobile);
    formdata.append('address',formdetails.address);
    formdata.append('state',formdetails.state);
    formdata.append('country',formdetails.country);
    formdata.append('pincode',formdetails.pincode);
    if (this.selectedFile) {
      formdata.append('image', this.selectedFile, this.selectedFile.name);
    } else {
      console.error('Selected file is null. Cannot append to formdata.');
    }
    if(!this.basicinfoForm.valid){
      this.invalid = true
    }else{
      this.proservice.proActive(this.jwt)
      .subscribe((res)=>{
        this.userid = (res as { _id: string })._id;
        this.proservice.addbasicinfo(formdata,this.userid)
        .subscribe(()=>{
          this.toastr.success("Information added successfully");
          this.router.navigate(['/pro/businessdetails']);
        },
        (err)=>{
          if(err.error.message){
            this.toastr.error(err.error.message);
          }else{
            this.toastr.error("Something went wrong");
          }
        }
        )
      },
      (err)=>{
        if(err.error.message){
          this.toastr.error(err.error.message);
        }else{
          this.toastr.error("Something went wrong");
        }
      }
      )
    }
  }
}
