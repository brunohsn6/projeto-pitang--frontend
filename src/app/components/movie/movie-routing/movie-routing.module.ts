import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieDetailComponent } from '../movie-detail/movie-detail.component';
// import { MovieComponent } from '../movie.component';

const routes: Routes = [
  // { path : '', : component : MovieComponent },
  { path : 'details/:id', component : MovieDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
