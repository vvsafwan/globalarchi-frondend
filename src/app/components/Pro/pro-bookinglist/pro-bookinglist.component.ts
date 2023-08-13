import { Component, OnInit } from '@angular/core';
import { ProserviceService } from 'src/app/services/proservice.service';

@Component({
  selector: 'app-pro-bookinglist',
  templateUrl: './pro-bookinglist.component.html',
  styleUrls: ['./pro-bookinglist.component.css']
})
export class ProBookinglistComponent implements OnInit {

  bookingdata:any[] = [];

  constructor(
    private proservice: ProserviceService
  ){}

  ngOnInit(): void {
    this.proservice.loadprobookings()
    .subscribe((res)=>{
      this.bookingdata = res
    })
  }
}
