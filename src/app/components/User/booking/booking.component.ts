import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserserviceService } from 'src/app/services/userservice.service';
declare var Razorpay: any;

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  bookingForm!:FormGroup;
  invalid:boolean = false;

  constructor(
    private toastr: ToastrService,
    private userservice: UserserviceService,
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient
  ){}

  ngOnInit(): void {
    this.bookingForm = new FormGroup({
      name: new FormControl("",[
        Validators.required
      ]),
      place: new FormControl("",[
        Validators.required
      ]),
      mobile: new FormControl("",[
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
        Validators.pattern("[0-9]*")
      ]),
      state: new FormControl("",[
        Validators.required
      ]),
      address: new FormControl("",[
        Validators.required
      ]),
      country: new FormControl("",[
        Validators.required
      ]),
      pincode: new FormControl("",[
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(6)
      ]),
      date: new FormControl("",[
        Validators.required
      ]),
    })
  }

  get name(): FormControl{
    return this.bookingForm.get("name") as FormControl;
  }

  get place(): FormControl{
    return this.bookingForm.get("place") as FormControl;
  }

  get mobile(): FormControl{
    return this.bookingForm.get("mobile") as FormControl;
  }
  
  get country(): FormControl{
    return this.bookingForm.get("country") as FormControl;
  }

  get state(): FormControl{
    return this.bookingForm.get("state") as FormControl;
  }

  get address(): FormControl{
    return this.bookingForm.get("address") as FormControl;
  }

  get pincode(): FormControl{
    return this.bookingForm.get("pincode") as FormControl;
  }

  get date(): FormControl{
    return this.bookingForm.get("date") as FormControl;
  }

  bookingformsubmit(){
    const user = this.bookingForm.getRawValue();
    const proid:any = this.route.snapshot.paramMap.get('id');
    if(!this.bookingForm.valid){
      this.invalid = true;
    }else{
      this.userservice.savebooking(proid,user)
      .subscribe((res)=>{
        this.toastr.warning("Do payment for booking");
        const RazorpayOptions = {
          description: 'Sample Razorpay demo',
          currency: 'INR',
          amount: 200000,
          name: 'Global Archi',
          key: 'rzp_test_n0IW2eUop9hlZT',
          handler: (response:any)=>{
            this.verifypayment(response)
          },
          image:'https://images.pexels.com/photos/157811/pexels-photo-157811.jpeg?auto=compress&cs=tinysrgb&w=1600',
          prefill: {
            name: 'global archi',
            email: 'vvsafwan2002@gmail.com',
            phone: '7025051202'
          },
          theme: {
            color: '#f37254'
          },
          modal:{
            ondismiss:()=>{
              console.log('dismissed');
            }
          }
        }
        const successCallback = (paymentid: any)=>{
          console.log(paymentid);
        }

        const failureCallback = (e:any)=>{
          console.log(e);
        }

        Razorpay.open(RazorpayOptions,successCallback,failureCallback)
      },(err)=>{
        this.toastr.error(err.error.message); 
      })
    }
  }
  verifypayment(response: any) {
    const proid:any = this.route.snapshot.paramMap.get('id');
    this.userservice.verifypayment(response,proid)
    .subscribe((res)=>{
      this.toastr.success("Payment success");
      this.router.navigate(['/bookinglist']);
    },(err)=>{
      this.toastr.error(err.error.message)
    })
  }
}  






