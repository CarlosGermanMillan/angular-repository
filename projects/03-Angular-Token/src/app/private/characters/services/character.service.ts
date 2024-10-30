import { inject, Injectable, signal } from '@angular/core';
import { Character } from '../models/character.model';
import { HttpClient } from '@angular/common/http';
import { catchError, of } from 'rxjs';

// SST Single Source of truth
@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  state = signal({
    // characters : [] as Character[]
    characters : new Map<number, Character>(),
    // loading: false
  })

  baseUrl = "https://localhost:4000/characters"
  http = inject(HttpClient)

  getCharacters(){
    // this.state.update((state) => {state.loading =true; return state;})
    this.http.get<Character[]>(this.baseUrl).pipe(
      catchError(error => {
        console.error(error)
        return [
          [{
            id:1,
            name:'Rick',
            status:'Alive',
            species:'Human',
          }] as Character[]
        ]
      })
    ).subscribe(result => {
        const charactersMap = new Map();
        result.forEach(elem => charactersMap.set(elem.id,elem))
        const newState = {characters: charactersMap};
        this.state.set(newState)
      })
  }

  editCharacter(character: Character){
    this.http.put(`${this.baseUrl}/${character.id}`,character).pipe(
      catchError(error => {
        console.log(error);
        return of({status: 200})
      })
    ).subscribe(result => {
      this.state.update(state => {
        state.characters.set(character.id,character)
        return state;
      })
    })
  }

  deleteCharacter(characterId: number){
    this.http.delete<void>(`${this.baseUrl}/${characterId}`).pipe(
      catchError(error => {
        console.log(error);
        return of({status: 200})
      })
    ).subscribe(
      _result => {
        this.state.update(state => {
          state.characters.delete(characterId)
          return state;
        })
      }
    )
  }

  addCharacter(character : Character){
    this.http.post<Character[]>(`${this.baseUrl}`,character).pipe(
      catchError(error => {
        console.log(error);
        return of({status: 200})
      })
    ).subscribe(
      _result => {
        this.state.update(state => {
          state.characters.set(character.id,character);
          return state;
        })
      }
    )
  }
}
