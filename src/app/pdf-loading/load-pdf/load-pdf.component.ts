import { Component, OnInit } from '@angular/core';
import { ConnectionService } from 'src/app/connection.service';

@Component({
  selector: 'app-load-pdf',
  templateUrl: './load-pdf.component.html',
  styleUrls: ['./load-pdf.component.css']
})
export class LoadPdfComponent implements OnInit {
  src:any ="";
  requestPdf:string;
  subName:string;
  zoomSize:number=1.1;
  constructor( private myser:ConnectionService) {
   }
retrivedResponse:any;
base64data:any;
spinner:boolean = true;
  ngOnInit() {
    
      this.requestPdf = sessionStorage.getItem("subjectName");
      if(sessionStorage.getItem(this.requestPdf) != null){
        this.src = sessionStorage.getItem(this.requestPdf);
        this.spinner = false;
      }
      else{
        var repo = this.myser.findPdf(this.requestPdf);
        repo.subscribe(res=>{
        this.retrivedResponse = res;
        this.base64data = this.retrivedResponse.data;
        this.src = `data:application/pdf;base64,${this.base64data}`;
        this.spinner = false;
        sessionStorage.setItem(this.requestPdf,this.src);
      
      },(error)=>{
        alert("server not responding!");
      });
    }
  }
   
  zoom_in() {
    this.zoomSize = this.zoomSize + 0.25;
  }

  zoom_out() {
    if (this.zoomSize > 1) {
       this.zoomSize = this.zoomSize - 0.25;
    }
  }

}
