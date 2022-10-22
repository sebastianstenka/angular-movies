import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { MovieGroup } from 'src/app/models/moviesGroup';
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
    this.moviesService.getMovies(MovieGroup.Popular).subscribe((res: any) => {
      this.popularMovies = res.results;
    });

    this.moviesService.getMovies(MovieGroup.TopRated).subscribe((res: any) => {
      this.topRatedMovies = res.results;
    });

    this.moviesService.getMovies(MovieGroup.Upcoming).subscribe((res: any) => {
      this.upcomingMovies = res.results;
    });
  }
}
