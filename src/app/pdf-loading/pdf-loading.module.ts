import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseViewComponent } from './course-view/course-view.component';
import { LoadPdfComponent } from './load-pdf/load-pdf.component';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule, MatProgressSpinnerModule } from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import { PdfLoadingRoutingModule } from './pdf-loading-routing.module';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
@NgModule({
  declarations: [CourseViewComponent, LoadPdfComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    PdfLoadingRoutingModule,
    PdfViewerModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule
  ]
 
})
export class PdfLoadingModule { 
  constructor(){
    console.log('pdf module load');
    
  }
}
