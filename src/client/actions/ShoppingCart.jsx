import { ActionTypes } from '../constants/ActionTypes';

export function addProduct(product) {
  return { type: ActionTypes.ADD_ITEM, id: product.id, product: product };
};

export function removeProduct(id) {
  return { type: ActionTypes.REMOVE_ITEM, id: id };
}

export function changeNumberOfCartons(product, noOfCartons) {
  return {
    type: ActionTypes.CHANGE_NUMBER_OF_CARTONS,
    id: product.id,
    product: {
      id: product.id,
      noOfCarton: noOfCartons,
      value: product.unitCost * product.unitsInCartons * noOfCartons,
      category: product.category,
    },
  };
}
