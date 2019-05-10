import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TvshowComponent } from './components/tvshow/tvshow.component';
import { MovieComponent } from './components/movie/movie.component';
import { MovieService } from './services/movie.service';
import { HttpClientModule } from '@angular/common/http';
import { HighlightDirective } from './shared/highlight.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { MovieDetailComponent } from './components/movie/movie-detail/movie-detail.component';
import { TvshowDetailComponent } from './components/tvshow/tvshow-detail/tvshow-detail.component';
import { ActorComponent } from './components/person/actor/actor.component';
import { DirectorComponent } from './components/person/director/director.component';
import { AuthorComponent } from './components/person/author/author.component';
import { ActorDetailComponent } from './components/person/actor/actor-detail/actor-detail.component';
import { AuthorDetailComponent } from './components/person/author/author-detail/author-detail.component';
import { DirectorDetailComponent } from './components/person/director/director-detail/director-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    TvshowComponent,
    MovieComponent,
    HighlightDirective,
    MovieDetailComponent,
    TvshowDetailComponent,
    ActorComponent,
    DirectorComponent,
    AuthorComponent,
    ActorDetailComponent,
    AuthorDetailComponent,
    DirectorDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgbModule.forRoot()
    
  ],
  providers: [
    MovieService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
