import Immutable from 'immutable';
import { ActionTypes } from './../../../src/client/constants/ActionTypes';
import reducer  from './../../../src/client/reducers/ShoppingCart';

describe('Shopping Cart Reducer::', () => {
    const initialState = Immutable.Map({});

    it('should create blank state', () => {

        expect(reducer(undefined, {})).toEqual(initialState);
      });

    it('should add product', () => {
        const action = {
            type: ActionTypes.ADD_ITEM,
            id: 5,
            product: {
                id: 5,
                value: 100,
              },
          };
        const expected = initialState.merge({ [action.id]: action.product });

        expect(reducer(undefined, action)).toEqual(expected);

      });
  });
