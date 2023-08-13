import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Users } from '../../models/usersList';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { uniqueUser } from '../../state/app.selectors';
import { AdminserviceService } from 'src/app/services/adminservice.service';
import { retrieveUsers } from '../../state/app.action';

@Component({
  selector: 'app-adminuserlist',
  templateUrl: './adminuserlist.component.html',
  styleUrls: ['./adminuserlist.component.css']
})
export class AdminuserlistComponent implements OnInit {


  constructor(
    private store: Store<{allUsers:Users[]}>,
    private router: Router,
    private toastr: ToastrService,
    private adminservice: AdminserviceService
  ){}

  usersList$ = this.store.pipe(select(uniqueUser));
  jwt!: string|null;

  ngOnInit(): void {
    this.jwt = localStorage.getItem('adminsession');
    this.store.dispatch(retrieveUsers())
  }

  blockUser(id:string){
    this.adminservice.blockUser(id)
    .subscribe(()=>{
      this.store.dispatch(retrieveUsers())
      this.toastr.success("User Blocked Successfully");
    },
    (err)=>{
      this.toastr.error("Something went wrong");
    }
    )
  }

  unBlockUser(id:string){
    this.adminservice.unBlockUser(id)
    .subscribe(()=>{
      this.store.dispatch(retrieveUsers())
      this.toastr.success("User Unblocked Successfully");
    },
    (err)=>{
      this.toastr.error("Something went wrong");
    }
    )
  }
}
