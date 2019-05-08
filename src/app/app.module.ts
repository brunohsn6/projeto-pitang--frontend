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
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { MovieDetailComponent } from './components/movie/movie-detail/movie-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    TvshowComponent,
    MovieComponent,
    HighlightDirective,
    MovieDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
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
