import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieGroup } from '../models/moviesGroup';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  baseUrl = 'https://api.themoviedb.org/3';
  apiKey = 'a2e191de0670d1b3e93d71ddf029e2e6';

  movieGroupTopRated = 'top_rated';
  movieGroupUpcoming = 'upcoming';
  movieGroupPopular = 'popular';

  constructor(private http: HttpClient) {}

  getMovies(group: MovieGroup) {
    var groupAsString = this.getGroupAsString(group);
    return this.http.get(`${this.baseUrl}/movie/${groupAsString}?api_key=${this.apiKey}`);
  }

  getGroupAsString(group: MovieGroup): string {
    switch (group) {
      case MovieGroup.TopRated:
        return this.movieGroupTopRated;

      case MovieGroup.Upcoming:
        return this.movieGroupUpcoming;

      case MovieGroup.Popular:
      default:
        return this.movieGroupPopular;
    }
  }
}
