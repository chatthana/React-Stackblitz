import { get } from 'axios';
import {
  FETCH_GIRLS_REQUEST,
  FETCH_GIRLS_SUCCESS
} from './constants';

export const fetchGirls = () => async dispatch => {
  dispatch({ type: FETCH_GIRLS_REQUEST });
  const { data } = await get('https://private-fc5e1-girls1.apiary-mock.com/girls');
  dispatch({ type: FETCH_GIRLS_SUCCESS, payload: data });
};