import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProserviceService } from 'src/app/services/proservice.service';

@Component({
  selector: 'app-proeditprodetails',
  templateUrl: './proeditprodetails.component.html',
  styleUrls: ['./proeditprodetails.component.css']
})

export class ProeditprodetailsComponent implements OnInit {

  projectdetails!: FormGroup;
  invalid: boolean = false;
  selectedFile:File[] = [];
  jwt!: string|null;
  userid!: string;

  projectname2!:string;
  projectaddress2!:string;
  projectcost2!:string;
  projectyear2!:string;
  projectlink2!:string;
  image2!:string;

  constructor(
    private proservice: ProserviceService,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');
    const name = this.route.snapshot.paramMap.get('name');
    const address = this.route.snapshot.paramMap.get('address');

    this.proservice.loadsingleproject2(id,name,address)
    .subscribe((res)=>{
      console.log(res);
      
      this.projectname2 = res.projectname;
      this.projectaddress2 = res.projectaddress;
      this.projectcost2 = res.projectcost;
      this.projectyear2 = res.projectyear;
      this.projectlink2 = res.projectlink;
      this.image2 = res.image

      this.projectdetails = new FormGroup({
        projectname: new FormControl(this.projectname2,[
          Validators.required,
          Validators.minLength(4)
        ]),
        projectaddress: new FormControl(this.projectaddress2,[
          Validators.required,
        ]),
        projectcost: new FormControl(this.projectcost2,[
          Validators.required,
          Validators.pattern("[0-9]*")
        ]),
        projectyear: new FormControl(this.projectyear2,[
          Validators.required,
          Validators.pattern("[0-9]*")
        ]),
        projectlink: new FormControl(this.projectlink2),
        image: new FormControl("",[
          Validators.required
        ]),
      })
    })


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

    const name = this.route.snapshot.paramMap.get('name');
    const address = this.route.snapshot.paramMap.get('address');

    const formdetails = this.projectdetails.getRawValue();
    const formdata = new FormData();
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
          this.proservice.editprojectdetails(formdata,this.userid,name,address)
          .subscribe(()=>{
            this.toastr.success("Project details edited successfully");
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

