import { Component, OnInit } from '@angular/core';
import { MOVIES_GROUPS } from 'src/app/constants/movies.groups';
import { Movie } from 'src/app/models/movie';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  popularMovies: Movie[] = [];
  topRatedMovies: Movie[] = [];
  upcomingMovies: Movie[] = [];

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.getMovies(MOVIES_GROUPS.popular).subscribe((res) => {
      this.popularMovies = res.results;
    });

    this.moviesService.getMovies(MOVIES_GROUPS.topRated).subscribe((res) => {
      this.topRatedMovies = res.results;
    });

    this.moviesService.getMovies(MOVIES_GROUPS.upcoming).subscribe((res) => {
      this.upcomingMovies = res.results;
    });
  }
}
