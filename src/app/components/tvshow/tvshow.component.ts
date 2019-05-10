import { Component, OnInit } from '@angular/core';
import { Tvshow } from 'src/app/models/tvshow';
import { TvshowService } from 'src/app/services/tvshow.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tvshow',
  templateUrl: './tvshow.component.html',
  styleUrls: ['./tvshow.component.css']
})
export class TvshowComponent implements OnInit {
  search : string = "";
  tvshows: Tvshow[];

  titleSearch : string = "";
  yearSearch : number ;
  languageSearch : string = "";

  isTitleChecked : boolean = false;
  isYearChecked : boolean = false;
  isLanguageChecked : boolean = false;
  constructor(private tvshowService : TvshowService,
    private router : Router) { }

  ngOnInit() {
    this.getAll();
  }

  getAll(){
    this.tvshowService.getAll().subscribe(response => this.tvshows = response);
  }

  filter(){
    this.tvshowService
    .filter(this.titleSearch, this.yearSearch, this.languageSearch)
    .subscribe(response => this.tvshows = response);


    // .subscribe(response => this.movies = response);
  }

  edit(tvshow : Tvshow){
    this.router.navigate(['tvshows/details', tvshow.id]);
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
