// src/app/components/movie-detail/movie-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../interfaces/movie.interface';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-movie-details',
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatChipsModule,
  ],
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss'],
})
export class MovieDetailComponent implements OnInit {
  movie: Movie | null = null;
  loading = true;
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.loadMovie(+id);
    } else {
      this.handleError('Invalid movie ID');
    }
  }

  private loadMovie(id: number): void {
    this.movieService.getMovieDetails(id).subscribe({
      next: (movie) => {
        this.movie = movie;
        this.loading = false;
      },
      error: (err) => {
        this.handleError('Failed to load movie details');
        console.error(err);
      },
    });
  }

  private handleError(message: string): void {
    this.error = message;
    this.loading = false;
  }

  getRatingColor(rating: number): string {
    if (rating >= 8) return '#4CAF50';
    if (rating >= 6) return '#FFC107';
    return '#F44336';
  }

  formatRuntime(minutes: number | null): string {
    if (!minutes) return 'N/A';
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes}m`;
  }
}
