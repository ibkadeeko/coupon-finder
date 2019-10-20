import * as types from '../actions/actionTypes';
import initialState from './initialState';

const { coupons } = initialState;

const {
  SEARCH_COUPON_SUCCESS,
  SEARCH_COUPON_FAILURE,
} = types;

export default function (state = coupons, { type, payload }) {
  switch (type) {
    case SEARCH_COUPON_SUCCESS:
      return { ...payload.response };
    case SEARCH_COUPON_FAILURE:
      return { ...state, error: payload.error };
    default:
      return state;
  }
}
