import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProserviceService } from 'src/app/services/proservice.service';

@Component({
  selector: 'app-pro-renewpassword',
  templateUrl: './pro-renewpassword.component.html',
  styleUrls: ['./pro-renewpassword.component.css']
})
export class ProRenewpasswordComponent implements OnInit {

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
        Validators.maxLength(6)
      ])
    })
  }

  get verification(): FormControl{
    return this.verificationForm.get("verification") as FormControl
  }

  verificationSubmit(){

    const password = this.verificationForm.getRawValue();
    let token = this.route.snapshot.paramMap.get('token')
    console.log(token);
    

    if(!this.verificationForm.valid){
      this.invalid = true;
    }else{
      this.proservice.forgot(token,password)
      .subscribe(()=>{
        this.toastr.success("Your Password Changed successfully")
        this.router.navigate(['/pro/login']);
      }
      ,(err)=>{
        this.toastr.error("Something went wrong");
      }
      )
    }
  }
}
