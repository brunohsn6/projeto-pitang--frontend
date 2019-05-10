import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../models/movie';

@Injectable()
export class MovieService {
  private APIUrl = 'http://localhost:8080/movies';
  
  constructor(private http : HttpClient) { }

  getAll(){
    return this.http.get<Movie[]>(this.APIUrl+'/'); 
  }

  filter(title, year, language){
    //faz nada ainda
    return this.http.get<Movie[]>(this.APIUrl+'/getByFiltering?language='+language+"&title="+title+"&year="+year);
  }

  update(movie : Movie){
    this.http.put<Movie>(this.APIUrl+'/update', movie);
  }

  getById(id){

    return this.http.get<Movie>(this.APIUrl+'/getById?id='+id);
  }

  delete(id){
    // console.log(this.APIUrl+'/delete?id='+movie.id);
    this.http.delete(this.APIUrl+'/delete?id='+id);
  }



}
