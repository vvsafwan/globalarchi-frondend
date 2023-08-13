import { Component, Input, OnInit } from '@angular/core';
import { ChatsComponent } from '../chats.component';
import { ProserviceService } from 'src/app/services/proservice.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  @Input() data: any;
  constructor(
    private proservice: ProserviceService,
    private chatcomponent: ChatsComponent
  ){}
  ngOnInit(): void {
    
  }
  fullchat(id:string){
    this.chatcomponent.fullchat(id)
  }

}
