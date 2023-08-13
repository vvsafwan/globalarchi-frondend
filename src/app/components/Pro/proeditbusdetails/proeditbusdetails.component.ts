import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProserviceService } from 'src/app/services/proservice.service';

@Component({
  selector: 'app-proeditbusdetails',
  templateUrl: './proeditbusdetails.component.html',
  styleUrls: ['./proeditbusdetails.component.css']
})
export class ProeditbusdetailsComponent implements OnInit {

  businessdetails!: FormGroup;
  invalid: boolean = false;
  selectedFile:any|File = null;
  jwt!: string|null;
  userid!: string;

  website2!:string;
  budget2!:string;
  about2!:string;
  costdetails2!:string;
  businessdescription2!:string;
  image2!:string;
  awards2!:string;

  constructor(
    private proservice: ProserviceService,
    private toastr: ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');

    this.proservice.loadbusdetails(id)
    .subscribe((res)=>{
      this.website2 = res.website;
      this.budget2 = res.budget;
      this.about2 = res.about;
      this.businessdescription2 = res.businessdescription;
      this.costdetails2 = res.costdetails;
      this.awards2 = res.awards;
      this.image2 = res.image;

      this.businessdetails = new FormGroup({
        website: new FormControl(this.website2),
        budget: new FormControl(this.budget2,[
          Validators.required,
          Validators.pattern("[0-9]*")
        ]),
        about: new FormControl(this.about2,[
          Validators.required,
          Validators.minLength(80)
        ]),
        costdetails: new FormControl(this.costdetails2,[
          Validators.required
        ]),
        businessdescription: new FormControl(this.businessdescription2,[
          Validators.required,
          Validators.minLength(80)
        ]),
        image: new FormControl("",[
          Validators.required
        ]),
        awards: new FormControl(this.awards2)
      })
    },
    (err)=>{
      this.toastr.error("Something went wrong");
    })

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
          this.proservice.editbusdetails(formdata,this.userid)
          .subscribe(()=>{
            this.toastr.success("Business details updated successfully");
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
