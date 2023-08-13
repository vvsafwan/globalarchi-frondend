import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserserviceService } from 'src/app/services/userservice.service';
import { ChatComponent } from '../chat.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  userdata: any;
  @Input() data:any;

  constructor(
    private http:HttpClient,
    private userservice: UserserviceService,
    private chatcomponent: ChatComponent
  ){}

  ngOnInit(): void {
    this.getchatslist();
  }

  getchatslist(){
    this.userservice.userchatlist()
    .subscribe((res:any)=>{
      this.userdata = res.data
    })
  }
  fullchat(id:string){
    this.chatcomponent.fullchat(id);
  }
}
