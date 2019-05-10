import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../models/movie';

@Injectable()
export class MovieService {
  private APIUrl = 'http://localhost:8080/movies';
  
  constructor(private _httpClient : HttpClient) { }

  getAll(){
    return this._httpClient.get<Movie[]>(this.APIUrl+'/'); 
  }

  filter(title, year, language){
    //faz nada ainda
    return this._httpClient.get<Movie[]>(this.APIUrl+'/getByFiltering?language='+language+"&title="+title+"&year="+year);
  }

  update(movie, id){
    console.log(id)
    return this._httpClient.put<Movie>(`${this.APIUrl}/update/${id}`, movie);
  }

  getById(id){

    return this._httpClient.get<Movie>(this.APIUrl+'/getById?id='+id);
  }

  delete(id:number){
    console.log(id)
    return this._httpClient.delete(`${this.APIUrl}/${id}`);
  }



}
