import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMAGES_SIZES } from 'src/app/constants/images.sizes';
import { Movie, MovieVideo } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  movie: Movie | null = null;
  movieVideos: MovieVideo[] = [];

  constructor(private route: ActivatedRoute, private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => {
      this.getMovie(id);
      this.getMovieVideo(id);
    });
  }

  getMovie(id: string) {
    this.moviesService.getMovieById(id).subscribe((movie) => (this.movie = movie));
  }

  getMovieVideo(id: string) {
    this.moviesService.getMovieVideo(id).subscribe((videos) => (this.movieVideos = videos));
  }

  getImgPath() {
    return `${IMAGES_SIZES.medium + this.movie?.poster_path}`;
  }
}