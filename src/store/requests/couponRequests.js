import axios from 'axios';

const options = {
  headers: { 'Content-Type': 'application/json' },
};

const url = 'https://coupon-search-backend.herokuapp.com/coupons';

const searchCouponRequest = async (formData) => {
  try {
    const data = JSON.stringify(formData);
    const { data: response } = await axios.post(url, data, options);
    return response;
  } catch (error) {
    throw error.response.data.error;
  }
};

export default searchCouponRequest;
