import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MovieService } from 'src/app/services/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  
  public actualPage = 1;
  titleSearch : string = "";
  yearSearch : number ;
  languageSearch : string = "";
  movies: Movie[];
  isTitleChecked : boolean = false;
  isYearChecked : boolean = false;
  isLanguageChecked : boolean = false;

  constructor(private movieService : MovieService,
    private router : Router) { }

  ngOnInit() {
    this.getAll();
  }

  getAll(){
    this.movieService.getAll().subscribe(response => this.movies = response);
    
  }

  filter(){
    this.movieService
    .filter(this.titleSearch, this.yearSearch, this.languageSearch);

    // .subscribe(response => this.movies = response);
  }

  edit(movie : Movie){
    this.router.navigate(['movies/details', movie.id])
  }
  changeTitleState(){
    this.isTitleChecked = !this.isTitleChecked;
  }
  changeYearState(){
    this.isYearChecked = !this.isYearChecked;
  }
  changeLanguageState(){
    this.isLanguageChecked = !this.isLanguageChecked;
  }



}
