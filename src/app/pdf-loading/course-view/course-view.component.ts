import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { ConnectionService } from 'src/app/connection.service';
import { FormGroup, FormControl,Validators,NgForm,FormBuilder} from '@angular/forms';
import { Rateus } from 'src/app/RateUs';

@Component({
  selector: 'app-course-view',
  templateUrl: './course-view.component.html',
  styleUrls: ['./course-view.component.css']
})

export class CourseViewComponent implements OnInit{
  star=[1,2,3,4,5];
  like:boolean = false; 
  showfeedback:boolean=false;
  showcourse:boolean = true;
  clickEventsubscription:Subscription=undefined;
  progressSpin:boolean = true;
  courseCategory:string;
  constructor(private httpService:ConnectionService,private router:Router,private formbuilder:FormBuilder) {
      
   }
   courseList:courseDataFormate;
   counter:boolean=true;
  CourseNot:string;
   ngOnInit() {
    //alert('onit');
    this.courseCategory = sessionStorage.getItem('selectedCourseCategory');
 //  alert(`${this.course} clicked`);
    if(sessionStorage.getItem(this.courseCategory)!=null){
      this.progressSpin = false;
      this.courseList = JSON.parse(sessionStorage.getItem(this.courseCategory));
    }else{
        let repo = this.httpService.getsubjectList(this.courseCategory);
        repo.subscribe(data=>{
          this.courseList = data;
          sessionStorage.setItem(this.courseCategory,JSON.stringify(this.courseList));
          this.progressSpin = false; 
          if(typeof data==undefined || data.length <=0){
            this.CourseNot = "This course currently unavailable, we will provide it soon..";
            this.progressSpin = false;
          }else{
            this.progressSpin = false;
            this.CourseNot ="";
          }
        },(error)=>{
          alert('server not responding, try after sometime..');
        })
      }
  }
  sendRequestPdf(subjectName:string){
   // alert(subjectName)
    sessionStorage.setItem("coursePath",`${this.courseCategory}Pdf`)
    sessionStorage.setItem("subjectName",subjectName);
    this.router.navigate(["/PdfLoading/loadPdf"]);
  }
  feedBackForm = this.formbuilder.group({
    Name:['',Validators.required],
    feedback:['',Validators.required]
  }); 
  rateus;
  feedMsg:string;
  sendData(){
    this.feedMsg='';
    if(this.rating <= 0){
      alert('please rate us then submit');
      return;
    }
    this.rateus = new Rateus(`${this.feedBackForm.get("Name").value}`,
      `${this.feedBackForm.get("feedback").value}`,
      this.rating
    );
 //   this.rateus.rating = this.rating;
    this.httpService.submitRating(this.rateus).subscribe((data)=>{
      this.feedMsg = data;
    },(error)=>{
      alert('Server not responding plz try again sometime.');
    });
  }
  rating:number=0;
  rate(star){
    this.rating = star;
 //   console.log(star);
  }
  //this for like
  callLike(){
    if(this.like){
      this.like = false;
    } else{
      this.like = true;
    }
  }
}
 
interface courseDataFormate {
  course_Name:string ;
  discription:string;
}