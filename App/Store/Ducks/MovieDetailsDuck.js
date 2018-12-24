import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

const { Types, Creators } = createActions({
  movieDetailsRequest: ["id"],
  movieDetailsSuccess: ["movie"],
  movieDetailsFailure: null
});

export const MovieDetailsTypes = Types;
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
    movie: action.movie
  });

export const failure = state =>
  Immutable.merge(state, {
    fetching: false,
    error: true
  });

export const reducer = createReducer(INITIAL_STATE, {
  [Types.MOVIE_DETAILS_REQUEST]: request,
  [Types.MOVIE_DETAILS_SUCCESS]: success,
  [Types.MOVIE_DETAILS_FAILURE]: failure
});
