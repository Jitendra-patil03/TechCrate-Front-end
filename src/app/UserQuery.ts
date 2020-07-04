export class UserQuery {
    name:String;
    email:String;
    mobile:String;
    message:String;
    constructor(n:String,e:String,m:String,msg:string){
        this.name = n;
        this.email = e;
        this.mobile = m;
        this.message = msg;
    }
}