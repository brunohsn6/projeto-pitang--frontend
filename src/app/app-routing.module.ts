import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieComponent } from './components/movie/movie.component';
import { TvshowComponent } from './components/tvshow/tvshow.component';

const routes: Routes = [
  {path : "movies", component : MovieComponent,
  loadChildren: './components/movie/movie-routing/movie.module#MovieModule'},
  {path : "tvshows", component : TvshowComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
