import { combineReducers } from 'redux';
import coupons from './couponReducer';

const rootReducer = combineReducers({
  coupons,
});

export default rootReducer;
