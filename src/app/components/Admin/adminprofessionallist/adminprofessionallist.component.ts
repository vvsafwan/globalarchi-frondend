import { Component, OnInit } from '@angular/core';
import { Professionals } from '../../models/usersList';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminserviceService } from 'src/app/services/adminservice.service';
import { uniquePro } from '../../state/app.selectors';
import { retrievePro } from '../../state/app.action';

@Component({
  selector: 'app-adminprofessionallist',
  templateUrl: './adminprofessionallist.component.html',
  styleUrls: ['./adminprofessionallist.component.css']
})
export class AdminprofessionallistComponent implements OnInit {

  constructor(
    private store: Store<{allPro:Professionals[]}>,
    private router: Router,
    private toastr: ToastrService,
    private adminservice: AdminserviceService
  ){}

  proList$ = this.store.pipe(select(uniquePro));
  jwt!: string|null;

  ngOnInit(): void {
    this.jwt = localStorage.getItem('adminsession');
    this.store.dispatch(retrievePro())
  }

  blockPro(id:string){
    this.adminservice.blockPro(id)
    .subscribe(()=>{
      this.store.dispatch(retrievePro())
      this.toastr.success("Professional Blocked Successfully");
    },
    (err)=>{
      this.toastr.error("Something went wrong");
    }
    )
  }

  unBlockPro(id:string){
    this.adminservice.unBlockPro(id)
    .subscribe(()=>{
      this.store.dispatch(retrievePro())
      this.toastr.success("Professional Unblocked Successfully");
    },
    (err)=>{
      this.toastr.error("Something went wrong");
    }
    )
  }
}
