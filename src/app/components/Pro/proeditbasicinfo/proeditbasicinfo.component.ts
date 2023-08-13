import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProserviceService } from 'src/app/services/proservice.service';

@Component({
  selector: 'app-proeditbasicinfo',
  templateUrl: './proeditbasicinfo.component.html',
  styleUrls: ['./proeditbasicinfo.component.css']
})
export class ProeditbasicinfoComponent implements OnInit {

  basicinfoForm!: FormGroup;
  invalid: boolean = false;
  selectedFile:any|File = null;
  jwt!: string|null;
  userid!: string;

  constructor(
    private proservice: ProserviceService,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ){}

  userid2:any;
  companyname2:any;
  city2:any;
  mobile2:any;
  address2:any;
  state2:any;
  country2:any;
  pincode2:any;
  image2:any;

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');

    this.proservice.loadfirmdetails(id)
    .subscribe((data)=>{
      this.companyname2 = data.companyname;
      this.city2 = data.city;
      this.mobile2 = data.mobile;
      this.address2 = data.address;
      this.state2 = data.state;
      this.country2 = data.country;
      this.pincode2 = data.pincode;
      this.image2 = data.image;
      this.userid2 = data._id;

      this.basicinfoForm = new FormGroup({
        companyname: new FormControl(this.companyname2,[
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(20)
        ]),
        city: new FormControl(this.city2,[
          Validators.required
        ]),
        mobile: new FormControl(this.mobile2,[
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
          Validators.pattern("[0-9]*")
        ]),
        address: new FormControl(this.address2,[
          Validators.required
        ]),
        state: new FormControl(this.state2,[
          Validators.required
        ]),
        country: new FormControl(this.country2,[
          Validators.required
        ]),
        pincode: new FormControl(this.pincode2,[
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(6)
        ]),
        image: new FormControl("",[
          Validators.required
        ])
      })

    },
    (err)=>{
      this.toastr.error("Something went wrong");
    })

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
    console.log(this.basicinfoForm);
    
    if(!this.basicinfoForm.valid){
      this.invalid = true
    }else{
      this.proservice.updateinfo(formdata,this.userid2)
        .subscribe(()=>{
          this.toastr.success("Updated successfully");
          this.router.navigate(['/pro/firmdetailslist']);
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
