import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProserviceService } from 'src/app/services/proservice.service';

@Component({
  selector: 'app-probusinessdetails',
  templateUrl: './probusinessdetails.component.html',
  styleUrls: ['./probusinessdetails.component.css']
})
export class ProbusinessdetailsComponent implements OnInit {

  businessdetails!: FormGroup;
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
    this.businessdetails = new FormGroup({
      website: new FormControl(""),
      budget: new FormControl("",[
        Validators.required,
        Validators.pattern("[0-9]*")
      ]),
      about: new FormControl("",[
        Validators.required,
        Validators.minLength(80)
      ]),
      costdetails: new FormControl("",[
        Validators.required
      ]),
      businessdescription: new FormControl("",[
        Validators.required,
        Validators.minLength(80)
      ]),
      image: new FormControl("",[
        Validators.required
      ]),
      awards: new FormControl("")
    })

    this.jwt = localStorage.getItem('prosession');
    
    // if(this.jwt){
    //   ProEmitter.authEmitter.emit(true);
    //   this.router.navigate(['/pro/businessdetails']);
    // }else{
    //   ProEmitter.authEmitter.emit(false);
    //   this.router.navigate(['/pro/login']);
    // }
  }

  get website(): FormControl {
    return this.businessdetails.get("website") as FormControl
  }

  get budget(): FormControl {
    return this.businessdetails.get("budget") as FormControl
  }

  get about(): FormControl {
    return this.businessdetails.get("about") as FormControl
  }

  get costdetails(): FormControl {
    return this.businessdetails.get("costdetails") as FormControl
  }

  get businessdescription(): FormControl {
    return this.businessdetails.get("businessdescription") as FormControl
  }

  get image(): FormControl {
    return this.businessdetails.get("image") as FormControl
  }

  get awards(): FormControl {
    return this.businessdetails.get("awards") as FormControl
  }

  onFileSelected(event:any) {
    this.selectedFile = <File>event.target.files[0]
  }

  businessdetailsSubmit(){
    const formdetails = this.businessdetails.getRawValue();
    const formdata = new FormData();
    if (this.selectedFile) {
      formdata.append('image', this.selectedFile, this.selectedFile.name);
    } else {
      console.error('Selected file is null. Cannot append to formdata.');
    }
      formdata.append('website',formdetails.website);
      formdata.append('budget',formdetails.budget);
      formdata.append('about',formdetails.about);
      formdata.append('costdetails',formdetails.costdetails);
      formdata.append('businessdescription',formdetails.businessdescription);
      formdata.append('awards',formdetails.awards);
      if(!this.businessdetails.valid){
        this.invalid = true
      }else{
        this.proservice.proActive(this.jwt)
        .subscribe((res)=>{
          this.userid = (res as { _id: string })._id;
          this.proservice.addbusinessdetails(formdata,this.userid)
          .subscribe(()=>{
            this.toastr.success("Business details added successfully");
            this.router.navigate(['/pro/projectdetails']);
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
