import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from '../movie-card/movie-card.component';

@Component({
  selector: 'app-movies-list',
  imports: [CommonModule, MovieCardComponent],
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.scss',
})
export class MovieListComponent implements OnInit {
  categories = [
    { type: 'now_playing', title: 'Now Playing', movies: [] },
    { type: 'popular', title: 'Popular', movies: [] },
    { type: 'top_rated', title: 'Top Rated', movies: [] },
  ];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.categories.forEach((category) => {
      this.getMoviesByCategory(category.type);
    });
  }

  private getMoviesByCategory(category: string) {
    const serviceMap: { [key: string]: any } = {
      now_playing: this.movieService.getNowPlaying(),
      popular: this.movieService.getPopularMovies(),
      top_rated: this.movieService.getTopRated(),
    };

    serviceMap[category].subscribe((data: any) => {
      const categoryObj = this.categories.find((c) => c.type === category);
      if (categoryObj) {
        categoryObj.movies = data.results.slice(0, 6);
      }
    });
  }
}
