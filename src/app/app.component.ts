import { Component } from '@angular/core';
import { MovieListComponent } from './components/movies-list/movies-list.component';

@Component({
  selector: 'app-root',
  imports: [MovieListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'movie-app';
}
