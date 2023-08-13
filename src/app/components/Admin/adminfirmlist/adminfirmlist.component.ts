import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { BasicInfo } from '../../models/usersList';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminserviceService } from 'src/app/services/adminservice.service';
import { uniqueFirm } from '../../state/app.selectors';
import { retrieveFirms } from '../../state/app.action';

@Component({
  selector: 'app-adminfirmlist',
  templateUrl: './adminfirmlist.component.html',
  styleUrls: ['./adminfirmlist.component.css']
})
export class AdminfirmlistComponent implements OnInit {

  constructor(
    private store: Store<{allFirms:BasicInfo[]}>,
    private router: Router,
    private toastr: ToastrService,
    private adminservice: AdminserviceService
  ){}

  firmsList$ = this.store.pipe(select(uniqueFirm));
  jwt!: string|null;

  ngOnInit(): void {
    this.jwt = localStorage.getItem('adminsession');
    this.store.dispatch(retrieveFirms())
  }

  block(id:string){
    this.adminservice.blockFirm(id)
    .subscribe(()=>{
      this.store.dispatch(retrieveFirms())
      this.toastr.success("Firms Blocked Successfully");
    },
    (err)=>{
      this.toastr.error("Something went wrong");
    }
    )
  }

  unblock(id:string){
    this.adminservice.unBlockFirm(id)
    .subscribe(()=>{
      this.store.dispatch(retrieveFirms())
      this.toastr.success("Firms Unblocked Successfully");
    },
    (err)=>{
      this.toastr.error("Something went wrong");
    }
    )
  }

  edit(id:string){
    this.router.navigate(['/admin/editfirmlist',id])
  }

  verify(id:string){
    this.router.navigate(['/admin/verifybusiness',id])
  }

}
