import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { UserQuery } from './UserQuery';
import { Observable } from 'rxjs';
import { AdminDataFormat } from './AdminDataFormat';
import { ThrowStmt } from '@angular/compiler';
import { FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { Rateus } from './RateUs';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  //: HttpHeaders | { [header: string]: string | string[]; };

  constructor(private http:HttpClient) { }
  //url:string = "http://192.168.43.74:1500";//"http://localhost:1500";
  url:string = environment.apiUrl;

    contactUs(query:UserQuery){
         
      //alert("called from url");
      return this.http.post(this.url+"/contactUs",query,{responseType:'text'});
    }

    findPdf(id:string):Observable<any>{

      return this.http.get(this.url+"/"+sessionStorage.getItem("coursePath")+"/"+id,{responseType:"json"});
    }
    //register admin
    register(formData:AdminDataFormat){
      return this.http.post(this.url+"/registerAdmin",formData,{responseType:"text"});
    }
    login(email:string,password:string):Observable<any>{
      return this.http.get(this.url+"/login/"+email+"/"+password,{responseType:"text"});
    }
    //get queries
    getQueries():Observable<any>{
      return this.http.get(this.url+"/getAllQuery",{responseType:"json"});
    }
    s:string;
    uploadPdf(file:FormGroup,selectfile:File):Observable<any>{
      const formdata = new FormData();
      formdata.append("file",selectfile);
      formdata.append("courseName",file.get("courseName").value);
      formdata.append("category",file.get("courseCategory").value);
      this.s = "Author:-"+file.get("author").value+"<br>discription:- "+file.get("discription").value;
      formdata.append("description",this.s);
      console.log(formdata.get("file").valueOf.length);
      //alert(""+file.get("courseCategory").value);
      return this.http.post(this.url+"/uploadCourse",formdata,{responseType:"text"});
      
    }
    getsubjectList(category:string):Observable<any>{
       return this.http.get(this.url+"/getCourseSubjects/"+category,{responseType:"json"});
    }
    
    submitRating(rateUs:Rateus):Observable<any>{
      return this.http.post(this.url+"/userRating",rateUs,{responseType:"text"});
    }
}
