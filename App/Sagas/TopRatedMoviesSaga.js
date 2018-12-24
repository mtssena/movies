import { call, put } from 'redux-saga/effects';

import TopRatedMoviesActions from '../Store/Ducks/TopRatedMoviesDuck';

export function* getTopRated(api, action) {
  const { page } = action;
  const response = yield call(api.movies.top_rated, page);

  if (response.ok) {
    const movies = response.data.results;

    yield put(TopRatedMoviesActions.topRatedMoviesSuccess(movies));
  } else {
    yield put(TopRatedMoviesActions.topRatedMoviesFailure());
  }
}
