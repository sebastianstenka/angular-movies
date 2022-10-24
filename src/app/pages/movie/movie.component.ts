import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs';
import { IMAGES_SIZES } from 'src/app/constants/images.sizes';
import { Movie, MovieCredits, MovieImage, MovieVideo } from 'src/app/models/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  movie: Movie | null = null;
  movieVideos: MovieVideo[] = [];
  movieImages: MovieImage[] = [];
  movieCredits: MovieCredits | null = null;

  imageSize = IMAGES_SIZES;

  constructor(private route: ActivatedRoute, private moviesService: MoviesService) {}

  ngOnInit(): void {
    // get only one time from subscribe and close the subscription
    // it is necessary except httpClient
    this.route.params.pipe(first()).subscribe(({ id }) => {
      this.getMovie(id);
      this.getMovieVideo(id);
      this.getMovieImages(id);
      this.getMovieCredits(id);
    });
  }

  getMovie(id: string) {
    this.moviesService.getMovieById(id).subscribe((movie) => (this.movie = movie));
  }

  getMovieVideo(id: string) {
    this.moviesService.getMovieVideo(id).subscribe((videos) => (this.movieVideos = videos));
  }

  getMovieImages(id: string) {
    this.moviesService.getMovieImages(id).subscribe((images) => (this.movieImages = images));
  }

  getMovieCredits(id: string) {
    this.moviesService.getMovieCredits(id).subscribe((credits) => {
      this.movieCredits = credits;
      this.movieCredits.cast = this.movieCredits.cast.filter((x) => x.profile_path != null);
    });
  }
}
