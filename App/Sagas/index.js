import { takeLatest, all } from 'redux-saga/effects';
import API from '../Services/Api';

/* ------------- Types ------------- */

import { PopularMoviesTypes } from '../Store/Ducks/PopularMoviesDuck';
import { LatestMovieTypes } from '../Store/Ducks/LatestMovieDuck';
import { MovieDetailsTypes } from '../Store/Ducks/MovieDetailsDuck';
import { UpcomingMoviesTypes } from '../Store/Ducks/UpcomingMoviesDuck';
import { TopRatedMoviesTypes } from '../Store/Ducks/TopRatedMoviesDuck';

/* ------------- Sagas ------------- */

import { getPopular } from './PopularMoviesSaga';
import { getLatest } from './LatestMovieSaga';
import { getDetails } from './MovieDetailsSaga';
import { getUpcoming } from './UpcomingMoviesSaga';
import { getTopRated } from './TopRatedMoviesSaga';

/* ------------- API ------------- */

const api = API();

/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
  yield all([
    takeLatest(PopularMoviesTypes.POPULAR_MOVIES_REQUEST, getPopular, api),
    takeLatest(LatestMovieTypes.LATEST_MOVIE_REQUEST, getLatest, api),
    takeLatest(MovieDetailsTypes.MOVIE_DETAILS_REQUEST, getDetails, api),
    takeLatest(UpcomingMoviesTypes.UPCOMING_MOVIES_REQUEST, getUpcoming, api),
    takeLatest(TopRatedMoviesTypes.TOP_RATED_MOVIES_REQUEST, getTopRated, api),
  ]);
}
