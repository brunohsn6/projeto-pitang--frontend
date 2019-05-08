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

  filter(title : string, year : number, language : string){
    //faz nada ainda
    console.log("tem nada ainda não!");
  }

  getById(id : number){
    return this.http.get<Movie>(this.APIUrl+'/'+id);
  }



}
