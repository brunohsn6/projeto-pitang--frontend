import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
    private movieService: MovieService,
    private router : Router) { }
    
  movie = {}
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];

      this.movieService.getById(id)
        .subscribe(response => {
          this.movie = response;
        })
    });
  }

  edit(movie){
    //this.router.navigate(['edit',"movie", movie.id]);

  }

}
