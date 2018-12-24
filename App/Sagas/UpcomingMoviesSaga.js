import { call, put } from 'redux-saga/effects';

import UpcomingMoviesActions from '../Store/Ducks/UpcomingMoviesDuck';

export function* getUpcoming(api, action) {
  const { page } = action;
  const response = yield call(api.movies.upcoming, page);

  if (response.ok) {
    const movies = response.data.results;

    yield put(UpcomingMoviesActions.upcomingMoviesSuccess(movies));
  } else {
    yield put(UpcomingMoviesActions.upcomingMoviesFailure());
  }
}
