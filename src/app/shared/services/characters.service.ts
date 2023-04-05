import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) { }

  getCharacters(page:number, text: string){
     return this.http.get(`https://rickandmortyapi.com/api/character?name=${text}&page=${page}`);
  }

  getCharactersId(id:string | null){
    return this.http.get(`https://rickandmortyapi.com/api/character/` + id);
 }

}
