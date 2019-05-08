import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieRoutingModule } from './movie-routing.module';
import { MovieDetailComponent } from '../movie-detail/movie-detail.component';


@NgModule({
  declarations: [
    MovieDetailComponent
  ],
  imports: [
    CommonModule,
    MovieRoutingModule
    
  ]
})
export class MovieModule { }
