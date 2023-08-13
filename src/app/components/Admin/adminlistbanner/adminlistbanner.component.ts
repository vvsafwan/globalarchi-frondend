import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Banners } from '../../models/usersList';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminserviceService } from 'src/app/services/adminservice.service';
import { uniqueBanner } from '../../state/app.selectors';
import { retrieveBanners } from '../../state/app.action';

@Component({
  selector: 'app-adminlistbanner',
  templateUrl: './adminlistbanner.component.html',
  styleUrls: ['./adminlistbanner.component.css']
})
export class AdminlistbannerComponent implements OnInit {

  constructor(
    private store: Store<{allBanners:Banners[]}>,
    private router: Router,
    private toastr: ToastrService,
    private adminservice: AdminserviceService
  ){}

  bannerData$ = this.store.pipe(select(uniqueBanner));
  jwt!: string|null;

  ngOnInit(): void {
    this.jwt = localStorage.getItem('adminsession');
    this.store.dispatch(retrieveBanners())
  }

  UnlistBanner(id:string){
    this.adminservice.UnlistBanner(id)
    .subscribe(()=>{
      this.store.dispatch(retrieveBanners())
      this.toastr.success("Banner Unlisted")
    },
    (err)=>{
      this.toastr.error("Something went wrong");
    })
  }

  ListBanner(id:string){
    this.adminservice.ListBanner(id)
    .subscribe(()=>{
      this.store.dispatch(retrieveBanners())
      this.toastr.success("Banner Listed");
    },
    (err)=>{
      this.toastr.error("Something went wrong");
    })
  }
}
