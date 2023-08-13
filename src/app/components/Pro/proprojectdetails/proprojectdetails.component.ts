import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProserviceService } from 'src/app/services/proservice.service';

@Component({
  selector: 'app-proprojectdetails',
  templateUrl: './proprojectdetails.component.html',
  styleUrls: ['./proprojectdetails.component.css']
})
export class ProprojectdetailsComponent implements OnInit {

  projectdetails!: FormGroup;
  invalid: boolean = false;
  selectedFile:File[] = [];
  jwt!: string|null;
  userid!: string;

  constructor(
    private proservice: ProserviceService,
    private toastr: ToastrService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.projectdetails = new FormGroup({
      projectname: new FormControl("",[
        Validators.required,
        Validators.minLength(4)
      ]),
      projectaddress: new FormControl("",[
        Validators.required,
      ]),
      projectcost: new FormControl("",[
        Validators.required,
        Validators.pattern("[0-9]*")
      ]),
      projectyear: new FormControl("",[
        Validators.required,
        Validators.pattern("[0-9]*")
      ]),
      projectlink: new FormControl(""),
      image: new FormControl("",[
        Validators.required
      ]),
    })

    this.jwt = localStorage.getItem('prosession');
    
    // if(this.jwt){
    //   ProEmitter.authEmitter.emit(true);
    //   this.router.navigate(['/pro/projectdetails']);
    // }else{
    //   ProEmitter.authEmitter.emit(false);
    //   this.router.navigate(['/pro/login']);
    // }
  }

  get projectname(): FormControl {
    return this.projectdetails.get("projectname") as FormControl
  }

  get projectaddress(): FormControl {
    return this.projectdetails.get("projectaddress") as FormControl
  }

  get projectyear(): FormControl {
    return this.projectdetails.get("projectyear") as FormControl
  }

  get projectcost(): FormControl {
    return this.projectdetails.get("projectcost") as FormControl
  }

  get image(): FormControl {
    return this.projectdetails.get("image") as FormControl
  }

  onFileChange(event:any) {
    this.selectedFile = event.target.files;
  }

  projectSubmit(){
    const formdetails = this.projectdetails.getRawValue();
    const formdata = new FormData();
    console.log(this.selectedFile);
    
    if (this.selectedFile) {
      for (const image of this.selectedFile) {
        formdata.append('image', image, image.name);
      }
    } else {
      console.error('Selected file is null. Cannot append to formdata.');
    }
      formdata.append('projectname',formdetails.projectname);
      formdata.append('projectaddress',formdetails.projectaddress);
      formdata.append('projectyear',formdetails.projectyear);
      formdata.append('projectcost',formdetails.projectcost);
      formdata.append('projectlink',formdetails.projectlink);

      if(!this.projectdetails.valid){
        this.invalid = true
      }else{
        this.proservice.proActive(this.jwt)
        .subscribe((res)=>{
          this.userid = (res as { _id: string })._id;
          this.proservice.addprojectdetails(formdata,this.userid)
          .subscribe(()=>{
            this.toastr.success("Project details added successfully");
            this.router.navigate(['/pro']);
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
