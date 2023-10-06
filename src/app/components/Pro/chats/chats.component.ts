import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Socket } from "ngx-socket-io";
import { ProserviceService } from 'src/app/services/proservice.service';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent implements OnInit {

  userid: string = '';
  chatshow: boolean = false;
  messages: any = [];
  message: string = '';
  connectionId: string = '';
  professionalId:string=''
  professionalchatdata:any
  username:string = ''
  image:string = ''
  myimage!:string

  constructor(
    private proservice: ProserviceService,
    private socket: Socket
  ){}

  ngOnInit(): void {
    this.getchatlist();
    this.socket.on('message recieved',(newMessage:any)=>{
      console.log(newMessage);
      if(this.userid == newMessage.from){
        this.messages.push(newMessage)
      }
    })
    this.proservice.loadmyimg()
    .subscribe((res:any)=>{
      this.myimage = res.image
      
    })
  }

  getchatlist(){
    this.proservice.professionalchatlist()
    .subscribe((res:any)=>{
      console.log(res);
      
      this.professionalchatdata=res.data 
      this.socket.emit('setup',res.id) 
    })
  }

  fullchat(userid: string,name:string,image:string) {
    this.userid = userid;
    this.username = name
    this.image = image
    this.proservice.chatblock(userid)
    .subscribe((res: any) => {
      this.socket.emit('join',res.cid) 
      this.chatshow = true;
      this.messages = res.result;
      this.connectionId = res.cid;
      this.professionalId=res.prof

    });
  }

  submit(){
    const data = {
      connectionid:this.connectionId,
      from:this.professionalId,
      to:this.userid,
      message:this.message
    }
    this.proservice.sendmessage(data)
    .subscribe((res)=>{
      this.message = ''
      this.messages.push(res);
      this.socket.emit('chatMessage',res)
    })
  }

}
