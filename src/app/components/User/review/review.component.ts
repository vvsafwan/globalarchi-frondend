import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  reviewForm!: FormGroup
  invalid:boolean = false;
  maxRating = 5;
  selectedRating:any = 0;
  stars: number[] = Array(this.maxRating).fill(0);

  constructor(
    private userservice: UserserviceService,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.reviewForm =  new FormGroup({
      name: new FormControl("",[
        Validators.required,
      ]),
      review: new FormControl("",[
        Validators.required,
      ]),
    })
  }

  get review(): FormControl{
    return this.reviewForm.get("review") as FormControl;
  }

  get name(): FormControl{
    return this.reviewForm.get("name") as FormControl;
  }

  onStarClick(rating: number): void {
    this.selectedRating = rating;
    console.log(this.selectedRating);
    
  }

  hoveredRating = 0;

  onStarHover(rating: number): void {
    this.hoveredRating = rating;
    
  }

  onStarHoverEnd(): void {
    this.hoveredRating = 0;
  }

  reviewSubmit(){
    const review = this.reviewForm.getRawValue();
    
    const id = this.route.snapshot.paramMap.get('id');
    // const formdata = new FormData();
    // formdata.append('review',review.review);
    // formdata.append('rating',this.selectedRating);
    // console.log(formdata);
    const formdata = {
      name:review.name,
      review:review.review,
      rating:this.selectedRating
    }
    if(!this.reviewForm.valid){
      this.invalid = true;
    }else{
      
      this.userservice.savereview(id,formdata)
      .subscribe((res)=>{
        console.log(res);
        this.toastr.success("Review Added Successfully")
        this.router.navigate(['/firmlist'])
      },(err)=>{
        this.toastr.error("something went wrong")
      })
    }
  }

}
