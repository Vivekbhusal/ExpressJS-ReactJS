import React from 'react';
import PropTypes from 'prop-types';

const ProductItem = ({ item }) => (

  <div className="item col-md-2">
    <div className="image">
      <img src={item.imageUrl} alt="product" />
    </div>
    <div className="name">{item.title}</div>
    <div className="amount">{`$${item.unitCost}`}<small>per unit</small></div>
    <div className="unit-per-carton">{`${item.unitsInCartons} units per carton`}</div>
    <div className="per-unit-price">{`($${parseFloat(item.unitCost * item.unitsInCartons).toFixed(2)})`}</div>
  </div>
);

ProductItem.defaultProps = {
  item: {
    imageUrl: '',
    title: '',
    unitCost: 0,
    unitsInCartons: 0,
  },
};

ProductItem.propTypes = {
  item: PropTypes.object,
};

export default ProductItem;
