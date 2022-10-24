import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie, MovieCredits, MovieDto, MovieImageDto, MovieVideoDto } from '../models/movie';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  baseUrl = 'https://api.themoviedb.org/3';
  apiKey = 'a2e191de0670d1b3e93d71ddf029e2e6';

  constructor(private http: HttpClient) {}

  getMovieById(id: string) {
    return this.http.get<Movie>(`${this.baseUrl}/movie/${id}?api_key=${this.apiKey}`);
  }

  getMovies(group: string, count: number = 12) {
    return this.http.get<MovieDto>(`${this.baseUrl}/movie/${group}?api_key=${this.apiKey}`).pipe(
      switchMap((res) => {
        return of(res.results.slice(0, count));
      })
    );
  }

  getMovieImages(id: string) {
    return this.http.get<MovieImageDto>(`${this.baseUrl}/movie/${id}/images?api_key=${this.apiKey}`).pipe(
      switchMap((res) => {
        return of(res.backdrops);
      })
    );
  }

  getMovieVideo(id: string) {
    return this.http.get<MovieVideoDto>(`${this.baseUrl}/movie/${id}/videos?api_key=${this.apiKey}`).pipe(
      switchMap((res) => {
        return of(res.results);
      })
    );
  }

  getMovieCredits(id: string) {
    return this.http.get<MovieCredits>(`${this.baseUrl}/movie/${id}/credits?api_key=${this.apiKey}`);
  }

  getMoviesByPage(group: string, page: number) {
    return this.http.get<MovieDto>(`${this.baseUrl}/movie/${group}?page=${page}&api_key=${this.apiKey}`).pipe(
      switchMap((res) => {
        return of(res.results);
      })
    );
  }
}
