import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProserviceService } from 'src/app/services/proservice.service';

@Component({
  selector: 'app-pro-register',
  templateUrl: './pro-register.component.html',
  styleUrls: ['./pro-register.component.css']
})
export class ProRegisterComponent implements OnInit {

  invalid:boolean = false;
  registerForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private toastr: ToastrService,
    private proservice: ProserviceService
  ){}

  ngOnInit(): void {
     this.registerForm = new FormGroup({
      name: new FormControl("",[
        Validators.required,
        Validators.minLength(3),
        Validators.pattern("[a-zA-Z].*")
      ]),
      email: new FormControl("",[
        Validators.required,
        Validators.email
      ]),
      mobile: new FormControl("",[
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
        Validators.pattern("[0-9]*")
      ]),
      password: new FormControl("",[
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(10)
      ])
    })
  }
  
  get name(): FormControl{
    return this.registerForm.get("name") as FormControl;
  }
  get email(): FormControl{
    return this.registerForm.get("email") as FormControl;
  }
  get mobile(): FormControl{
    return this.registerForm.get("mobile") as FormControl;
  }
  get password(): FormControl{
    return this.registerForm.get("password") as FormControl;
  }
  
  registerSubmited(){

    const user = this.registerForm.getRawValue();
    console.log(user);

    if(!this.registerForm.valid){
      this.invalid = true;
    }else{
      this.proservice.proRegister(user)
      .subscribe((result)=>{
        this.router.navigate(['/pro/verify',(result as {_id:string})._id]);
        this.toastr.success("Mail send for verification, please verify your email");
      }
      ,(err)=>{
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
