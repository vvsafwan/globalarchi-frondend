import { Component, OnInit } from '@angular/core';
import { UserserviceService } from 'src/app/services/userservice.service';
import { BasicInfo } from '../../models/usersList';
import { Store, select } from '@ngrx/store';
import { uniqueUserFirm } from '../../state/app.selectors';
import { retrieveUserFirm } from '../../state/app.action';
import { Router } from '@angular/router';
import { SearchpipePipe } from '../searchpipe.pipe';

@Component({
  selector: 'app-firmlist',
  templateUrl: './firmlist.component.html',
  styleUrls: ['./firmlist.component.css'],
  providers: [SearchpipePipe] 
})
export class FirmlistComponent implements OnInit {
  constructor(
    private userservice: UserserviceService,
    private store: Store<{allUserFirms:BasicInfo[]}>,
    private router: Router
  ){}
  searchTerm:string = '';
  allFirmdata$ = this.store.pipe(select(uniqueUserFirm));

  ngOnInit(): void {
    const jwt = localStorage.getItem('session');
    // this.userservice.homeActive(jwt)
    // .subscribe((res)=>{
    //   Emitter.authEmitter.emit(true);
    // },
    // (err)=>{
    //   Emitter.authEmitter.emit(false);
    // }
    // )
    this.store.dispatch(retrieveUserFirm());
  }

  firmdetails(userid:any){
    this.router.navigate(['/firmdetails',userid]);
  }

  chatconnection(id:any){
    this.userservice.chatconnection(id)
    .subscribe((res)=>{
      console.log("new connection saved");
      this.router.navigate(['/chats']); 
    })
  }

  addReview(id:any){
    this.router.navigate(['/review',id]);
  }

}
