import * as types from './actionTypes';
import api from '../requests/couponRequests';

export const searchCouponSuccess = (response) => ({
  type: types.SEARCH_COUPON_SUCCESS, payload: { response },
});

export const searchCouponFailure = (error) => ({
  type: types.SEARCH_COUPON_FAILURE, payload: { error },
});

export function searchCouponRequest(formData) {
  return async (dispatch) => {
    try {
      const response = await api(formData);
      return dispatch(searchCouponSuccess(response));
    } catch (error) {
      dispatch(searchCouponFailure(error));
      throw error;
    }
  };
}
