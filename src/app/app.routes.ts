import { Routes } from '@angular/router';
import { MovieListComponent } from './components/movies-list/movies-list.component';
import { MovieDetailComponent } from './components/movie-details/movie-details.component';

export const routes: Routes = [
  {
    path: '',
    component: MovieListComponent,
    title: 'Movie App',
  },
  {
    path: 'movie/:id',
    component: MovieDetailComponent,
    title: 'Movie Details',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
