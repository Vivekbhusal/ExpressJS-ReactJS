import { CALL_API } from 'redux-api-middleware';
import { ActionTypes } from '../constants/ActionTypes';
import { URL } from '../constants/URL';

export function getProductList() {
  return {
      [CALL_API]: {
          endpoint: URL.GET_PRODUCT_LIST,
          method: 'GET',
          types: [
              ActionTypes.PRODUCT_REQUEST,
              ActionTypes.PRODUCT_SUCCESS,
              ActionTypes.PRODUCT_FAILURE,
          ],
        },
    };
}
