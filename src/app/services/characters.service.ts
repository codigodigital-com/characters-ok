import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../models/character.interface';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  constructor(private http: HttpClient) {}

  getAllCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(
      'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json'
    );
  }

  getCharacterById(id: string): Observable<Character> {
    return this.http.get<Character>(
      `https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${id}.json`
    );
  }
}
