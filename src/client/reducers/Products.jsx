import Immutable from 'immutable';
import { ActionTypes } from '../constants/ActionTypes';

const initialState = Immutable.Map({
    products: [],
    loading: true,
    error: false,
  });

export default function Products(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.PRODUCT_REQUEST:
      return state.set('loading', true);

    case ActionTypes.PRODUCT_FAILURE:
      return state.merge({ loading: false, error: true });

    case ActionTypes.PRODUCT_SUCCESS:
      return state.merge({ loading: false, error: false, products: action.payload.products });

    default:
      return state;
  }
}
