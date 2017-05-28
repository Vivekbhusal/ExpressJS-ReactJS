import { addProduct, removeProduct, changeNumberOfCartons } from './../../../src/client/actions/ShoppingCart';
import { ActionTypes } from './../../../src/client/constants/ActionTypes';

describe('Shopping Cart Actions::', () => {
    it('should create action to add product', () => {
        const product = {
            id: 5,
            value: 55,
          };
        const expected = {
            type: ActionTypes.ADD_ITEM,
            id: product.id,
            product: product,
          };

        expect(addProduct(product)).toEqual(expected);
      });

    it('should create action to Remove product', () => {
        const id = 5;
        const expected = {
            type: ActionTypes.REMOVE_ITEM,
            id: id,
          };

        expect(removeProduct(id)).toEqual(expected);
      });

    it('should create action to Change carton number', () => {
        const product = {
            id: 5,
            unitCost: 10,
            unitsInCartons: 2,
            category: 'Mug',
          };

        const noOfCartons = 3;

        const expected = {
            type: ActionTypes.CHANGE_NUMBER_OF_CARTONS,
            id: product.id,
            product: {
                id: product.id,
                noOfCarton: noOfCartons,
                value: product.unitCost * product.unitsInCartons * noOfCartons,
                category: product.category,
              },
          };

        expect(changeNumberOfCartons(product, noOfCartons)).toEqual(expected);

      });
  });

