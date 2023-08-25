import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserserviceService } from 'src/app/services/userservice.service';
declare var Razorpay: any;

@Component({
  selector: 'app-bookinglist',
  templateUrl: './bookinglist.component.html',
  styleUrls: ['./bookinglist.component.css']
})
export class BookinglistComponent implements OnInit {

  bookingdata:any[] = [];

  constructor(
    private userservice: UserserviceService,
    private toastr:ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.bookings();
  }

  bookings(){
    this.userservice.loadbookings()
    .subscribe((res)=>{
      this.bookingdata = res
    })
  }

  payagain(id:string){
    this.userservice.payagain(id)
    .subscribe((res)=>{
      this.toastr.warning("Do payment for booking");
      const RazorpayOptions = {
        description: 'Sample Razorpay demo',
        currency: 'INR',
        amount: 200000,
        name: 'Global Archi',
        key: 'rzp_test_n0IW2eUop9hlZT',
        handler: (response:any)=>{
          this.verifypayment(response,id)
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
      this.toastr.error("Something went wrong");
    })
  }

  verifypayment(response: any,id:string) {
    this.userservice.verifypayment(response,id)
    .subscribe((res)=>{
      this.toastr.success("Payment success");
      this.bookings()
      this.router.navigate(['/bookinglist']);
    },(err)=>{
      this.toastr.error(err.error.message)
    })
  }

}
