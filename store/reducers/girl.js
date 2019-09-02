import { FETCH_GIRLS_REQUEST, FETCH_GIRLS_SUCCESS } from '../actions/girl';

const initialState = {
  list: [],
  isFetching: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_GIRLS_REQUEST:
      return { ...state, isFetching: true };
    case FETCH_GIRLS_SUCCESS:
      return { ...state, list: payload, isFetching: false };
    default:
      return state;
  }
};