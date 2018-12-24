import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

const { Types, Creators } = createActions({
  latestMovieRequest: null,
  latestMovieSuccess: ['movie'],
  latestMovieFailure: null,
});

export const LatestMovieTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  fetching: false,
  error: false,
  movie: null,
});

export const request = (state) => Immutable.merge(state, {
  fetching: true,
  error: false,
});

export const success = (state, action) => Immutable.merge(state, {
  fetching: false,
  error: false,
  movie: action.movie,
});

export const failure = state => Immutable.merge(state, {
  fetching: false,
  error: true,
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LATEST_MOVIE_REQUEST]: request,
  [Types.LATEST_MOVIE_SUCCESS]: success,
  [Types.LATEST_MOVIE_FAILURE]: failure,
});
