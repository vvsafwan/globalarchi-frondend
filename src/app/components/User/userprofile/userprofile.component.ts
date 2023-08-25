import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserserviceService } from 'src/app/services/userservice.service';

interface data{
  _id:string,
   userid:string,
   image:string 
}

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent {
  profileForm!:FormGroup
  selectedFile!:File;
  constructor(
    private userservice: UserserviceService,
    private toastr: ToastrService
  ){}

  name!:string;
  email!:string;
  mobile!:number;
  image!:any

  ngOnInit(): void {
    this.profileForm = new FormGroup({
      image: new FormControl("")
    })
    this.userservice.profile()
    .subscribe((res)=>{
      console.log(res);
      
      this.name = res.name;
      this.email = res.email;
      this.mobile = res.mobile
    })
    this.loadprofileimage()
  }

  loadprofileimage(){
    this.userservice.loadprofileimage()
    .subscribe((res: any)=>{
      this.image = res.image
    })
  }

  onFileSelected(event:any) {
    this.selectedFile = <File>event.target.files[0]
  }

  profilesubmit(){
    const formdata = new FormData();
    if (this.selectedFile) {
      formdata.append('image', this.selectedFile, this.selectedFile.name);
    } else {
      console.error('Selected file is null. Cannot append to formdata.');
    }
    this.userservice.updateuserprofile(formdata)
    .subscribe((res)=>{
      this.toastr.success("Profile picture successfully Updated");
      this.loadprofileimage()
    },(err)=>{
      this.toastr.error("Something went wrong")
    })
  }

}
