import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators,NgForm,FormBuilder} from '@angular/forms';
import { ConnectionService } from '../connection.service';
import { UserQuery } from '../UserQuery';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  formContactData = this.formBuilder.group({
    name: ['',Validators.required],
    email: ['',[Validators.required,Validators.email]],
    mobile: ['',[Validators.required,Validators.pattern("^[0-9]{10}$")]],
    message: ['']
  });
  constructor(private conService:ConnectionService,private formBuilder:FormBuilder) { }

  ngOnInit() {
  }
  
  public respMsg:string="";  
  query:UserQuery;
  sendData=()=>{
    //alert('jjjjjj');
    this.query = new UserQuery(""+this.formContactData.get("name").value,
    ""+this.formContactData.get("email").value, 
    ""+this.formContactData.get("mobile").value, 
    ""+this.formContactData.get("message").value);
    let repo = this.conService.contactUs(this.query);
    repo.subscribe(data=>{this.respMsg = `${data}`;
   // alert(this.respMsg);
   
  },
  (error)=>{
    console.log(error);
    alert("Server not responding");
  });
 
    
  }


}
