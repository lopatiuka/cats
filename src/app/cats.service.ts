import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Cat } from './interfaces/cat';
import { Breed } from './interfaces/breed';

@Injectable({
  providedIn: 'root'
})
export class CatsService {
  constructor (private http: HttpClient) {}

  private apiKey = "live_BLr5OrMcNbHglF19PHka1IJuOU10UESm5gj3aSfJFlWFdvyXSjjZVEaV4mtJ032v"

  getCats(limit: number = 10, breed?: string) {
    if (limit < 1) 
    limit = 10;

    let path = breed ? `https://api.thecatapi.com/v1/images/search?limit=${limit}&api_key=${this.apiKey}&breed_ids=${breed}` :
    `https://api.thecatapi.com/v1/images/search?limit=${limit}&api_key=${this.apiKey}`;
    let result = this.http.get<Cat[]>(path);
    return result
  }

  getBreeds() {
    let result = this.http.get<Breed[]>("https://api.thecatapi.com/v1/breeds");
    return result
  }
}