import { combineReducers } from "redux";

import NavigationReducer from "./NavigationDuck";
import { reducer as PopularMoviesReducer } from "./PopularMoviesDuck";
import { reducer as LatestMovieReducer } from "./LatestMovieDuck";
import { reducer as MovieDetailsReducer } from "./MovieDetailsDuck";
import { reducer as UpcomingMoviesReducer } from "./UpcomingMoviesDuck";
import { reducer as TopRatedMoviesReducer } from "./TopRatedMoviesDuck";

export default combineReducers({
  nav: NavigationReducer,
  popular: PopularMoviesReducer,
  latest: LatestMovieReducer,
  details: MovieDetailsReducer,
  upcoming: UpcomingMoviesReducer,
  topRated: TopRatedMoviesReducer
});
