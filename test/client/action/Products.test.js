import { CALL_API } from 'redux-api-middleware';
import { getProductList } from './../../../src/client/actions/Products';
import { ActionTypes } from './../../../src/client/constants/ActionTypes';
import { URL } from './../../../src/client/constants/URL';

describe('Products action::', () => {
    it('should create API middleware action to download product', () => {
        const expected = {
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

        expect(getProductList()).toEqual(expected);
      });
  });
