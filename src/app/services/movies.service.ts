import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieDto } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  baseUrl = 'https://api.themoviedb.org/3';
  apiKey = 'a2e191de0670d1b3e93d71ddf029e2e6';

  constructor(private http: HttpClient) {}

  getMovies(group: string) {
    return this.http.get<MovieDto>(`${this.baseUrl}/movie/${group}?api_key=${this.apiKey}`);
  }
}
