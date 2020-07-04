export class AdminDataFormat {
    private password:string;
    private email:string;
    private Id:string;
    private authid:string;
    constructor(e:string, p:string,i:string,a:string){
        this.email = e;
        this.password = p;
        this.Id = i;
        this.authid = a;
    }
}