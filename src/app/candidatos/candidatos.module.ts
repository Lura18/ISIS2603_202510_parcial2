import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidatosListComponent } from './candidatos-list/candidatos-list.component';
import { CandidatosDetailComponent } from './candidatos-detail/candidatos-detail.component';
import { CandidatosRoutingModule } from './candidatos-routing.module';
import  {RouterModule} from '@angular/router';



@NgModule({
  declarations: [
    CandidatosListComponent,
    CandidatosDetailComponent
  ],
  imports: [
    CommonModule,
    CandidatosRoutingModule,
    RouterModule
  ],
  exports: [
    CandidatosListComponent
  ]

})
export class CandidatosModule { }
