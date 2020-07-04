import { Component, OnInit } from '@angular/core';
import { ConnectionService } from 'src/app/connection.service';

@Component({
  selector: 'app-customer-query',
  templateUrl: './customer-query.component.html',
  styleUrls: ['./customer-query.component.css']
})
 
export class CustomerQueryComponent implements OnInit {
  S:any[];
  constructor(private httpSer:ConnectionService) { }
  show:boolean=false;
  ngOnInit() {
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
