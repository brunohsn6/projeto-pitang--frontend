import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieComponent } from './components/movie/movie.component';
import { TvshowComponent } from './components/tvshow/tvshow.component';
import { MovieDetailComponent } from './components/movie/movie-detail/movie-detail.component';
import { TvshowDetailComponent } from './components/tvshow/tvshow-detail/tvshow-detail.component';
import { ActorComponent } from './components/person/actor/actor.component';
import { AuthorComponent } from './components/person/author/author.component';
import { DirectorComponent } from './components/person/director/director.component';
import { ActorDetailComponent } from './components/person/actor/actor-detail/actor-detail.component';
import { AuthorDetailComponent } from './components/person/author/author-detail/author-detail.component';
import { DirectorDetailComponent } from './components/person/director/director-detail/director-detail.component';


const routes: Routes = [
  // { path : '#', component : MovieComponent },
  { path : "movies", component : MovieComponent },
  { path : 'movies/details/:id', component : MovieDetailComponent },
  { path : "tvshows", component : TvshowComponent },
  { path : 'tvshows/details/:id', component : TvshowDetailComponent },
  { path : 'actors', component : ActorComponent },
  { path : 'actors/details/:id', component : ActorDetailComponent },
  { path : 'authors', component : AuthorComponent },
  { path : 'authors/details/:id', component : AuthorDetailComponent },
  { path : 'directors', component : DirectorComponent },
  { path : 'directors/details/:id', component : DirectorDetailComponent },
    
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
