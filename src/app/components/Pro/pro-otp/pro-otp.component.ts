import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProserviceService } from 'src/app/services/proservice.service';

@Component({
  selector: 'app-pro-otp',
  templateUrl: './pro-otp.component.html',
  styleUrls: ['./pro-otp.component.css']
})
export class ProOtpComponent implements OnInit {

  invalid: boolean = false;
  verificationForm!: FormGroup;

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private proservice: ProserviceService
  ){}

  ngOnInit(): void {
    this.verificationForm = new FormGroup({
      verification: new FormControl("",[
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(4)
      ])
    })
  }

  get verification(): FormControl{
    return this.verificationForm.get("verification") as FormControl
  }

  verificationSubmit(){

    const otp = this.verificationForm.getRawValue();
    let id = this.route.snapshot.paramMap.get('id')

    if(!this.verificationForm.valid){
      this.invalid = true;
    }else{
      this.proservice.verification(id,otp)
      .subscribe(()=>{
        this.toastr.success("Your Email successfully verified")
        this.router.navigate(['/pro/login']);
      }
      ,(err)=>{
        if(err.error.message){
          this.toastr.error(err.error.message);
        }else{
          this.toastr.error("Something went wrong")
        }
      }
      )
    }
  }
}
