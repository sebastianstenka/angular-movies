import { Component, OnInit } from '@angular/core';
import { MOVIES_GROUPS } from 'src/app/constants/movies.groups';
import { Movie } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];
  page: number = 1;
  rows: number = 12;

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies() {
    this.moviesService.getMoviesByPage(MOVIES_GROUPS.popular, this.page).subscribe((movies) => {
      this.movies = movies;
    });
  }

  paginate(event: any) {
    this.page = event.page + 1;
    this.rows = event.rows;

    this.getMovies();
  }
}
