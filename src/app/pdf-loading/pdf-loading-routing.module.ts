import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseViewComponent } from './course-view/course-view.component';
import { LoadPdfComponent } from './load-pdf/load-pdf.component';


const routes: Routes = [
  { path:"", redirectTo:"/CourseView", pathMatch:"full" },
  { path:"CourseView",component:CourseViewComponent
  },
  { path:"loadPdf",component:LoadPdfComponent}  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule]
})
export class PdfLoadingRoutingModule { 
  


}
