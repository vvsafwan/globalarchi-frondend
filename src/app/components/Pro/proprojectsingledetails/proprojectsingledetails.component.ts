import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProserviceService } from 'src/app/services/proservice.service';

@Component({
  selector: 'app-proprojectsingledetails',
  templateUrl: './proprojectsingledetails.component.html',
  styleUrls: ['./proprojectsingledetails.component.css']
})
export class ProprojectsingledetailsComponent implements OnInit {
  projectname!:string;
  projectaddress!:string;
  projectyear!:number;
  projectcost!:string;
  projectlink!:string;
  image:any[] = [];
  jwt!: string|null;
  userid!:string;

  constructor(
    private proservice: ProserviceService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const name = this.route.snapshot.paramMap.get('name');
    const address = this.route.snapshot.paramMap.get('address');
    this.proservice.loadsingleproject(id,name,address)
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

  this.jwt = localStorage.getItem('prosession');
    
  // if(this.jwt){
  //   ProEmitter.authEmitter.emit(true);
  // }else{
  //   ProEmitter.authEmitter.emit(false);
  //   this.router.navigate(['/pro/login']);
  // }

  this.proservice.proActive(this.jwt)
  .subscribe((res)=>{
    this.userid = (res as {_id:string})._id;
  })
  }

  editsingleproject(){
    const id = this.route.snapshot.paramMap.get('id');
    const name = this.route.snapshot.paramMap.get('name');
    const address = this.route.snapshot.paramMap.get('address');
    this.router.navigate(['/pro/editprojectdetails',id,name,address]);
  }
}
