import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminserviceService } from 'src/app/services/adminservice.service';

@Component({
  selector: 'app-adminaddbanner',
  templateUrl: './adminaddbanner.component.html',
  styleUrls: ['./adminaddbanner.component.css']
})
export class AdminaddbannerComponent implements OnInit {
  addbannerForm!: FormGroup
  invalid: boolean = false;
  selectedFile:any|File = null;
  jwt!: string|null;


  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private route: Router,
    private toastr: ToastrService,
    private adminservice: AdminserviceService
  ){}

  ngOnInit(): void {
    this.addbannerForm = new FormGroup({
      description: new FormControl("",[
        Validators.required
      ]),
      header: new FormControl("",[
        Validators.required
      ])
    })

    this.jwt = localStorage.getItem('adminsession');

  }

  get description(): FormControl{
    return this.addbannerForm.get("description") as FormControl
  }
  get header(): FormControl{
    return this.addbannerForm.get("header") as FormControl
  }

  onFileSelected(event:any) {
    this.selectedFile = <File>event.target.files[0]
  }

  addbannerformsubmit(){
    if(!this.addbannerForm.valid){
      this.invalid = true
    }else{
      const formdetails = this.addbannerForm.getRawValue();
      const formdata = new FormData();
      formdata.append('image',this.selectedFile,this.selectedFile.name)
      formdata.append('header',formdetails.header)
      formdata.append('description',formdetails.description)
      
      this.adminservice.addbanner(formdata)
      .subscribe(()=>{
        this.toastr.success("Banner added Successfully");
        this.route.navigate(['/admin/listbanner']);
      }
      ,(err)=>{
        this.toastr.error("Something went wrong");
      }
      )
    }
  }
}
