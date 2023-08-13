import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chart } from 'chart.js';
import { AdminserviceService } from 'src/app/services/adminservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  jwt!: string|null;
  users!:number;
  professional!:number;
  firms!:number;
  booking!:number;

  constructor(
    private router: Router,
    private adminservice: AdminserviceService
  ){}

  ngOnInit(): void {
    this.jwt = localStorage.getItem('adminsession');
    this.adminservice.loaddatas()
    .subscribe((res)=>{
      console.log(res);
      this.users = res.usercount;
      this.professional = res.procount;
      this.firms = res.firmcount;
      this.booking = res.bookingcount;
      var mychart = new Chart("myChart", {
        type: 'bar',
        data: {
          labels: ['Users', 'Professionals', 'Firms', 'Banners', 'Bookings'],
          datasets: [{
            label: 'Analysis',
            data: [res.usercount, res.procount, res.firmcount, res.bannercount, res.bookingcount],
            borderWidth: 2
          }]
        },
        options: {
          
        }
      });
      var mychart = new Chart("piechart", {
        type: 'doughnut',
        data: {
          labels: [
            'Payment success',
            'Payment Failed',
          ],
          datasets: [{
            label: 'Payment Analysis',
            data: [res.money, res.moneyfailed],
            backgroundColor: [
              'rgb(229,229,229)',
              'rgb(0, 0, 0)',
            ],
          }]
        },
        options: {
          
        }
      });
    })
  }
}
