import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tvshow } from '../models/tvshow';

@Injectable({
  providedIn: 'root'
})
export class TvshowService {
  private APIUrl = 'http://localhost:8080/tvshows';

  constructor(private http : HttpClient) { }

  getAll(){
    return this.http.get<Tvshow[]>(this.APIUrl+'/'); 
  }
  
  filter(title : string, year : number, language : string){
    console.log("bate aqui")
    return this.http.get<Tvshow[]>(this.APIUrl+'/getByFiltering?language='+language+"&title="+title+"&year="+year);

  }

  update(tvshow : Tvshow, id){
    this.http.put<Tvshow>(this.APIUrl+'/update?id='+id, tvshow);
  }

  getById(id){

    return this.http.get<Tvshow>(this.APIUrl+'/getById?id='+id);
  }

  delete(tvshow : Tvshow){
    // console.log(this.APIUrl+'/delete?id='+movie.id);
    return this.http.delete(`${this.APIUrl}/${tvshow.id}`);
  }
}
