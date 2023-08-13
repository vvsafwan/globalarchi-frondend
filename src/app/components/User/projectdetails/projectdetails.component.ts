import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { UserserviceService } from 'src/app/services/userservice.service';
import { PopUpComponent } from '../pop-up/pop-up.component';

@Component({
  selector: 'app-projectdetails',
  templateUrl: './projectdetails.component.html',
  styleUrls: ['./projectdetails.component.css']
})
export class ProjectdetailsComponent implements OnInit {

  projectname!:string;
  projectaddress!:string;
  projectyear!:number;
  projectcost!:string;
  projectlink!:string;
  image:any[] = [];

  constructor(
    private userservice: UserserviceService,
    private route: ActivatedRoute,
    private dialogRef: MatDialog
  ){}

  // openDialog(){
  //   this.dialogRef.open(PopUpComponent,{
  //     data:{
  //       image:this.image
  //     }
  //   });
  // }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const name = this.route.snapshot.paramMap.get('name');
    const address = this.route.snapshot.paramMap.get('address');    
    this.userservice.loadsingleproject(id,name,address)
    .subscribe((res)=>{
      this.projectname = res.projectname;
      this.projectaddress = res.projectaddress;
      this.projectyear = res.projectyear;
      this.projectcost = res.projectcost;
      if(res.projectlink==""){
        this.projectlink = "NIL";
      }else{
        this.projectlink = res.projectlink;
      }
      this.image = res.image
      console.log(this.image);
      
      
    })
  }
}
