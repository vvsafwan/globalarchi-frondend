import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProserviceService } from 'src/app/services/proservice.service';

@Component({
  selector: 'app-pro-forgotpassword',
  templateUrl: './pro-forgotpassword.component.html',
  styleUrls: ['./pro-forgotpassword.component.css']
})
export class ProForgotpasswordComponent implements OnInit {

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
        Validators.email
      ])
    })
  }

  get verification(): FormControl{
    return this.verificationForm.get("verification") as FormControl
  }

  verificationSubmit(){

    const email = this.verificationForm.getRawValue();

    if(!this.verificationForm.valid){
      this.invalid = true;
    }else{
      this.proservice.forgotPassword(email)
      .subscribe(()=>{
        this.toastr.success("Email for forgot password has send to email.")
        this.router.navigate(['/pro/login']);
      }
      ,(err)=>{
        this.toastr.error("Something went wrong")
      }
      )
    }
  }
}
