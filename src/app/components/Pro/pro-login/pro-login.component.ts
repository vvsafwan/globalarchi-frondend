import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProserviceService } from 'src/app/services/proservice.service';

@Component({
  selector: 'app-pro-login',
  templateUrl: './pro-login.component.html',
  styleUrls: ['./pro-login.component.css']
})
export class ProLoginComponent implements OnInit{

  invalid: boolean = false;
  loginForm!: FormGroup;
  jwt!: string|null;

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private route: Router,
    private toastr: ToastrService,
    private proservice: ProserviceService
  ){}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl("",[
        Validators.required,
        Validators.email
      ]),
      password: new FormControl("",[
        Validators.required
      ])
    })
    
    this.jwt = localStorage.getItem('prosession');
    
    // if(this.jwt){
    //   ProEmitter.authEmitter.emit(true);
    //   this.route.navigate(['/pro']);
    // }else{
    //   ProEmitter.authEmitter.emit(false);
    // }
  }

  loginSubmit(){

    const user = this.loginForm.getRawValue();
    console.log(user);

    if(!this.loginForm.valid){
      this.invalid = true
    }else{
      this.proservice.proLogin(user)
      .subscribe((res)=>{
        localStorage.setItem('prosession',res.toString())
        this.route.navigate(['/pro']);
      }
      ,(err)=>{
        if(err.error.message=="User not verified"){
          this.toastr.error("User not verified");
          this.proservice.proReverification(user)
          .subscribe((result)=>{
            this.route.navigate(['/pro/verify',(result as {_id:string})._id]);
            this.toastr.success("Mail send for verification, please verify your email");
          },
          (err)=>{
            if(err.error.message){
              this.toastr.error(err.error.message);
            }else{
              this.toastr.error("Something went wrong");
            }
          }
          )
        }else if(err.error.message){
          this.toastr.error(err.error.message);
        }else{
          this.toastr.error("Something went wrong");
        }
      }
      )
    }
  }

  get email(): FormControl{
    return this.loginForm.get("email") as FormControl
  }
  get password(): FormControl{
    return this.loginForm.get("password") as FormControl
  }

}
