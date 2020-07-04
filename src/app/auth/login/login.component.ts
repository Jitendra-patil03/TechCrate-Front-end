import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder,Validators,NgForm } from '@angular/forms';
import { AdminDataFormat } from 'src/app/AdminDataFormat';
import { ConnectionService } from 'src/app/connection.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private httpSer:ConnectionService,private myRout:Router) { }

  ngOnInit() {
  }
  loginData = this.formBuilder.group({
    logemail:['', [Validators.required,Validators.email]],
    pass: ['',Validators.required]
  });
  registerData = this.formBuilder.group({
    Regemail:['',[Validators.required,Validators.email]],
    Regpass: ['',[Validators.required]],
    id:['',[Validators.required]],
    authId:['',Validators.required]
  });
  trueRegister:boolean = false;
 loginRes:any;
 l:string;
  login(){
    let repo = this.httpSer.login(""+this.loginData.get("logemail").value, ""+this.loginData.get("pass").value);
    repo.subscribe(data=>{
      if(data === "success"){
        alert('login successfull');
        sessionStorage.setItem('email',this.loginData.get("logemail").value);
        this.myRout.navigate(['/Auth/AdminHome']);
      }
      else{
        alert("login failed");
        alert(data);
      }
    },
    (error)=>{
      console.log(error);
      alert('Server not responding');
    });
  }
  registerTrue(){
    if(this.trueRegister)
    this.trueRegister = false;
    else
    this.trueRegister = true;

  }
  registerMsg:any;
  register(){
   let adminData:AdminDataFormat = new AdminDataFormat(
    this.registerData.get("Regemail").value,
    this.registerData.get("Regpass").value,
    this.registerData.get("id").value,
    this.registerData.get("authId").value
   );
  let repo = this.httpSer.register(adminData);
  repo.subscribe(data=>this.registerMsg = data,
    (error)=>{
      console.log(error);
      alert('Server not responding');
    });

  }

}
