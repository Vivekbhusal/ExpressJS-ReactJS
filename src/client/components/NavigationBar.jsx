import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sum, map, size } from 'lodash';
class NavigationBar extends Component {

  constructor(props) {
    super(props);
  }

  getTotalValue() {
    return parseFloat(sum(map(this.props.cart, item => item.value))).toFixed(2);
  }

  getTotalProducts() {
    return size(this.props.cart);
  }

  render() {
    return (
      <div className="container-full">
        <div className="row store-navbar-wrapper" >
          <div className="nav nav-bar store-navbar">
            <div className="total-product-wrapper">
              <div className="total-label">Total Products</div>
              <div className="total-number">{this.getTotalProducts()}</div>
            </div>
            <div className="total-cost-wrapper">
              <div className="total-label">Total Cost</div>
              <div className="total-number">{`$${this.getTotalValue()}`}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    cart: store.ShoppingCart.toJS(),
  };
};

export default connect(mapStateToProps)(NavigationBar);



