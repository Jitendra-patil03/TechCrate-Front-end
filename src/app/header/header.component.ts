import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private router:Router) { }

  ngOnInit() {
  }

  goToCourse(course:string){
    //alert(course)
    sessionStorage.setItem('selectedCourseCategory',course);
      let currentUrl = this.router.url;
      this.router.navigate(['/PdfLoading/CourseView']);
      if(currentUrl==="/PdfLoading/CourseView"){
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
          this.router.navigate([currentUrl]);
        });
    }
  }
  comeSoon(){
    alert('we are coming soon with this course...');
  }

}
