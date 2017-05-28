import React, { Component } from 'react';

const ProductItem = ({ item }) => (

    <div className="item col-md-2">
        <div className="image">
            <img src={item.imageUrl} alt="product" />
        </div>
        <div className="name">{item.title}</div>
        <div className="amount">{`$${item.unitCost}`}<small>per unit</small></div>
        <div className="unit-per-carton">{`${item.unitsInCartons} units per carton`}</div>
        <div className="per-unit-price">{`($${item.unitCost * item.unitsInCartons})`}</div>
    </div>
);

export default ProductItem;
