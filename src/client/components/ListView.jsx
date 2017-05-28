import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { groupBy, map, isEmpty } from 'lodash';
import { connect } from 'react-redux';
import ListItemGroup from './ListView/ListItemGroup';

class ListView extends Component {

  getLists() {
    if (!isEmpty(this.props.cart)) {
      return map(
          groupBy(this.props.cart, item => item.category),
          (products, key) => <ListItemGroup key={key} id={key} products={products} />,
      );
    }

    return <div className="empty">
      <span className="message">There are no products on the cart yet. Please add some product from product lists</span>
    </div>;
  }

  render() {
    return (
        <div className="row list-view">
              { this.getLists() }
            </div>
      );
  }
}

ListView.defaultProps = {
  cart: {},
};

ListView.propTypes = {
  cart: PropTypes.object,
};

function mapStateToProps(state) {
  return {
    cart: state.ShoppingCart.toJS(),
  };
}

export default connect(mapStateToProps)(ListView);
