import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';


const routes: Routes = [
  { path:"", redirectTo:"/Home", pathMatch:"full" },
  
  {
    path:"Auth",loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path:"PdfLoading",loadChildren: () => import('./pdf-loading/pdf-loading.module').then(m => m.PdfLoadingModule)
  },
  { path:"Privacy & Policy",  component:PrivacyPolicyComponent },
  { path:"Home",  component:HomeComponent },
  { path:"About",component:AboutComponent },
  { path:"ContactUs",component:ContactUsComponent },
  { path:"**",component:PagenotfoundComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],

  exports: [RouterModule]
})
export class AppRoutingModule { 
  


}
