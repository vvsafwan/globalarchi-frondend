import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Socket } from "ngx-socket-io";
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  userdata:any
  viewerid:string = ''
  chatshow:boolean = false
  messages:any = []
  message:string = ''
  connectionId:string = ''
  userid:string = ''
  proname:string = ''
  image:string = ''
  imageuser:string = ''

  constructor(
    private http: HttpClient,
    private userservice: UserserviceService,
    private toastr: ToastrService,
    private socket: Socket
  ){}

  ngOnInit(): void { 
    this.getchatslist()
    this.socket.on('message recieved',(newMessage:any)=>{
      if(this.viewerid == newMessage.from){
        this.messages.push(newMessage )
      }
    })    
    this.loadprofileimage()
  }
  loadprofileimage(){
    this.userservice.loadprofileimage()
    .subscribe((res: any)=>{
      this.imageuser = res.image
    })
  }
  @ViewChild('chatContainer') chatContainer!: ElementRef 
  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }
  private scrollToBottom(): void {
    try {
      this.chatContainer.nativeElement.scrollTop = this.chatContainer.nativeElement.scrollHeight;
    } catch (err) {
      // Handle any errors related to scrolling (if necessary)
    }
  }
  getchatslist(){
    this.userservice.userchatlist()
    .subscribe((res:any)=>{
      console.log(res);
      
      this.userdata = res.data
      this.socket.emit('setup',res.id)
    })
  }

  fullchat(professionalid:string,name:string,image:string){
    this.viewerid = professionalid
    this.proname = name
    this.image = image
    console.log(image);
    
    this.chatshow = true
    this.userservice.chatblock(professionalid)
    .subscribe((res:any)=>{
      this.socket.emit('join',res.cid)
      this.messages = res.result
      this.connectionId = res.cid
      this.userid = res.userid
    })
  }

  submit(){
    if(this.message==""){
      this.toastr.error("Please type message")
    }else{
      const data = {
        connectionid:this.connectionId,
        from:this.userid,
        to:this.viewerid,
        message:this.message
      }
      this.userservice.sentmessage(data)
      .subscribe((res)=>{
        this.message = ''
        this.messages.push(res);
        this.socket.emit('chatMessage',res)
      })
    }
  }
}
