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
    //faz nada ainda
    console.log("tem nada ainda não!");
  }
}
