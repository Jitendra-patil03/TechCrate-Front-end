import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { CustomerQueryComponent } from './customer-query/customer-query.component';


const routes: Routes = [
  { path:"", redirectTo:"/loginAdmin", pathMatch:"full" },
  { path:"loginAdmin",component:LoginComponent },
  { path:"AdminHome",component:AdminHomeComponent},
  { path: "CustomerQuery",component:CustomerQueryComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule]
})
export class AuthRoutingModule { 
  


}


