import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}

  // Fetches list of popular movies from API
  getPopularMovies() {
    return this.http.get(
      `${environment.tmdbBaseUrl}/movie/popular?api_key=${environment.tmdbApiKey}`
    );
  }

  getNowPlaying() {
    return this.http.get(
      `${environment.tmdbBaseUrl}/movie/now_playing?api_key=${environment.tmdbApiKey}`
    );
  }

  getTopRated() {
    return this.http.get(
      `${environment.tmdbBaseUrl}/movie/top_rated?api_key=${environment.tmdbApiKey}`
    );
  }

  // Gets detailed information for a specific movie by ID
  getMovieDetails(id: number) {
    return this.http.get(
      `${environment.tmdbBaseUrl}/movie/${id}?api_key=${environment.tmdbApiKey}`
    );
  }
}
