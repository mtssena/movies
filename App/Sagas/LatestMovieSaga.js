import { call, put } from 'redux-saga/effects';

import LatestMovieActions from '../Store/Ducks/LatestMovieDuck';

export function* getLatest(api) {
  const response = yield call(api.movies.latest);

  if (response.ok) {
    const movie = response.data;

    yield put(LatestMovieActions.latestMovieSuccess(movie));
  } else {
    yield put(LatestMovieActions.latestMovieFailure());
  }
}
