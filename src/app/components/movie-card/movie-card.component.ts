import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-card',
  imports: [CommonModule, MatCardModule, MatIconModule, RouterLink],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss',
})
export class MovieCardComponent {
  @Input() movie: any;

  get ratingColor(): string {
    const rating = this.movie.vote_average;
    if (rating >= 8) return '#4CAF50'; // green
    if (rating >= 6) return '#FFC107'; // yellow
    return '#F44336'; // red
  }
}
