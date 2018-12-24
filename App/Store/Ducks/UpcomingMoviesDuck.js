import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

const { Types, Creators } = createActions({
  upcomingMoviesRequest: ["page"],
  upcomingMoviesSuccess: ["movies"],
  upcomingMoviesFailure: null
});

export const UpcomingMoviesTypes = Types;
export default Creators;

export const INITIAL_STATE = Immutable({
  fetching: false,
  error: false,
  movies: null
});

export const request = state =>
  Immutable.merge(state, {
    fetching: true,
    error: false
  });

export const success = (state, action) =>
  Immutable.merge(state, {
    fetching: false,
    error: false,
    movies: action.movies
  });

export const failure = state =>
  Immutable.merge(state, {
    fetching: false,
    error: true
  });

export const reducer = createReducer(INITIAL_STATE, {
  [Types.UPCOMING_MOVIES_REQUEST]: request,
  [Types.UPCOMING_MOVIES_SUCCESS]: success,
  [Types.UPCOMING_MOVIES_FAILURE]: failure
});
