import { Component, OnInit } from '@angular/core';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-bookinglist',
  templateUrl: './bookinglist.component.html',
  styleUrls: ['./bookinglist.component.css']
})
export class BookinglistComponent implements OnInit {

  bookingdata:any[] = [];

  constructor(
    private userservice: UserserviceService
  ){}

  ngOnInit(): void {
    this.userservice.loadbookings()
    .subscribe((res)=>{
      
      this.bookingdata = res
      console.log(this.bookingdata);

    })
  }

}
