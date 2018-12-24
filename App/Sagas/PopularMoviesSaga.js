import { call, put } from 'redux-saga/effects';

import PopularMoviesActions from '../Store/Ducks/PopularMoviesDuck';

export function* getPopular(api, action) {
  const { page } = action;
  const response = yield call(api.movies.popular, page);

  if (response.ok) {
    const movies = response.data.results;

    yield put(PopularMoviesActions.popularMoviesSuccess(movies));
  } else {
    yield put(PopularMoviesActions.popularMoviesFailure());
  }
}
