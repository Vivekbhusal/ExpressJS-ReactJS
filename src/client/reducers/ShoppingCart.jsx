import Immutable from 'immutable';
import { ActionTypes } from '../constants/ActionTypes';

const initialState = Immutable.Map({});

export default function shoppingCart(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.ADD_ITEM:
      return state.merge({ [action.id]: action.product });

    case ActionTypes.REMOVE_ITEM:
      return state.delete(action.id);

    case ActionTypes.CHANGE_NUMBER_OF_CARTONS:
      return state.merge({ [action.id]: action.product });

    default:
      return state;
  }
}
