import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
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
  genreId: number | null = null;

  constructor(private moviesService: MoviesService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe(({ genreId }) => {
      if (genreId) {
        this.getMoviesByGenre(genreId, 1);
        this.genreId = genreId;
      } else {
        this.getPagedMovies(1);
      }
    });
  }

  getPagedMovies(pageNumber: number) {
    this.moviesService.getMoviesByPage(MOVIES_GROUPS.popular, pageNumber).subscribe((movies) => {
      this.movies = movies;
    });
  }

  getMoviesByGenre(genreId: number, pageNumber: number) {
    this.moviesService.getMoviesByGenreId(genreId, pageNumber).subscribe((movies) => {
      this.movies = movies;
    });
  }

  paginate(event: any) {
    var pageNumber = event.page + 1;
    if (this.genreId) {
      this.getMoviesByGenre(this.genreId, pageNumber);
    } else {
      this.getPagedMovies(pageNumber);
    }
  }
}
