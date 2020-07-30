import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl,FormBuilder,Validators,NgForm } from '@angular/forms';
import { ConnectionService } from 'src/app/connection.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  constructor(private router:Router,private formBuilder:FormBuilder,private httpSer:ConnectionService) { }
  uploadFileData = this.formBuilder.group({
    courseCategory:['', [Validators.required]],
    courseName: ['',Validators.required],
    coursePdf: ['',Validators.required],
    author: ['',Validators.required],
    discription: ['',Validators.required],

  });
  file:File;
  selectPdf(event){
    this.file = event.target.files[0];
  }


  ngOnInit() {
    if(!sessionStorage.getItem('email')){
      alert('plz login first..');
    this.router.navigate(['/Auth/loginAdmin']);
    }
  }
  logout(){
    sessionStorage.clear();
    this.router.navigate(['/Auth/loginAdmin']);
  }
  uploadPdf(){
   let repo = this.httpSer.uploadPdf(this.uploadFileData,this.file);
   repo.subscribe((data)=>{
     alert(""+data);
   },(error)=>{alert('Not uploaded');
    console.log(error);
  })
  }

}
