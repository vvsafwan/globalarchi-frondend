import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Bookings } from '../../models/usersList';
import { AdminserviceService } from 'src/app/services/adminservice.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { uniqueBooking } from '../../state/app.selectors';
import { retrieveBooking } from '../../state/app.action';

@Component({
  selector: 'app-adminbookings',
  templateUrl: './adminbookings.component.html',
  styleUrls: ['./adminbookings.component.css']
})
export class AdminbookingsComponent implements OnInit {

  constructor(
    private store: Store<{allBookings:Bookings[]}>,
    private adminservice: AdminserviceService,
    private route: Router,
    private toastr: ToastrService
  ){}

  bookingList$ = this.store.pipe(select(uniqueBooking));

  ngOnInit(): void {
    this.store.dispatch(retrieveBooking())
  }

}
