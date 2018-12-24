import { call, put } from 'redux-saga/effects';

import MovieDetailsActions from '../Store/Ducks/MovieDetailsDuck';

export function* getDetails(api, action) {
  const { id } = action;
  const response = yield call(api.movies.details, id);

  if (response.ok) {
    const movie = response.data;

    yield put(MovieDetailsActions.movieDetailsSuccess(movie));
  } else {
    yield put(MovieDetailsActions.movieDetailsFailure());
  }
}
