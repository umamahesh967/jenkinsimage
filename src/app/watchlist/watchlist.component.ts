import { Movie } from './../movie';
import { MoviesService } from './../services/movies.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {

  constructor(private movieService: MoviesService, private router: Router) { }
  watchList: Array < Movie > = [];
  ngOnInit() {
    this.movieService.getAllMovies().subscribe(response => {
      this.watchList = response;
      console.log('this.watchList');
      console.log(this.watchList);
    });
  }
  goToDetail(id: number) {
    const link = ['/movie', id];
    this.router.navigate(link);
  }

   updateComments(id: number, value: string ) {
    this.movieService.updateMovieComments(id, value);
   }
   removeFromWatchList(id: number) {
     this.movieService.removeMovieFromWatchList(id);
   }

}


