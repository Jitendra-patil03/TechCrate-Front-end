import { Component, OnInit } from '@angular/core';
import { ConnectionService } from 'src/app/connection.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-query',
  templateUrl: './customer-query.component.html',
  styleUrls: ['./customer-query.component.css']
})
 
export class CustomerQueryComponent implements OnInit {
  S:any[];
  constructor(private httpSer:ConnectionService,private router:Router) { }
  show:boolean=false;
  ngOnInit() {
    if(!sessionStorage.getItem('email')){
      alert('plz login first..');
     this.router.navigate(['/Auth/loginAdmin']);
    }
    let repo = this.httpSer.getQueries();
    repo.subscribe(data=>{this.S=data;
      this.show = true;
    },
    (error)=>{
      console.log(error);
      alert('Server not responding');
    })
  }

}
