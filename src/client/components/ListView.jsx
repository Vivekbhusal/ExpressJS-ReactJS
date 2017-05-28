import React, { Component } from 'react';
import ListItemGroup from './ListView/ListItemGroup';
import { groupBy, map } from 'lodash';
import { connect } from 'react-redux';

class ListView extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="row list-view">
              {
                  map(
                      groupBy(this.props.cart, item => item.category),
                      (products, key) => <ListItemGroup key={key} id={key} products={products} />,
                  )
              }
            </div>
      );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.ShoppingCart.toJS()
  }
}

export default connect(mapStateToProps)(ListView)