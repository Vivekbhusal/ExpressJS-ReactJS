import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListItem from './ListItem';
import { removeProduct, changeNumberOfCartons } from '../../actions/ShoppingCart';
import { connect } from 'react-redux';
import { find, flattenDeep, map } from 'lodash';

class ListItemGroup extends Component {

  getGroupHeader(id, length) {
    return (
      <div className="category-header">
        {`${id} (${length})`}
      </div>
    );
  }

  removeItem(id) {
    this.props.dispatch(removeProduct(id));
  }

  getTitleHeader() {
    return (
      <div className="row title-header">
        <div className="col-md-2 image">Image</div>
        <div className="col-md-2 name">Name</div>
        <div className="col-md-1 unit-cost">UNIT COST</div>
        <div className="col-md-2 pack-size">Pack Size<small>No. of Units</small></div>
        <div className="col-md-1 unit-carton">Units in carton</div>
        <div className="col-md-2 carton-number">No. of Cartons</div>
        <div className="col-md-1 value">Value</div>
        <div className="col-md-1 action">Action</div>
      </div>
    );
  }

  getProductCompleteData(id) {
    return find(
            flattenDeep(
                map(
                    this.props.allProducts.products,
                    (product) => product.items
                )
            ),
            { id: id }
    );
  }

  changeNoOfCarton(product, noOfCarton) {
    this.props.dispatch(changeNumberOfCartons(product, noOfCarton));
  }

  render() {
    const { id, products } = this.props;

    return (
      <div className="group-item">

        {this.getGroupHeader(id, products.length)}
        {this.getTitleHeader()}
        <div className="grouped-item-list">
          {
            products.map((product, index) => <ListItem
                key={index}
                item={product}
                itemDetails={this.getProductCompleteData(product.id)}
                handleCartonChange={this.changeNoOfCarton.bind(this)}
                handleRemove={() => this.removeItem(product.id)} />
            )
          }
        </div>

      </div>
    );
  }
}

ListItemGroup.propTypes = {
  id: PropTypes.string,
  products: PropTypes.array,
};

ListItemGroup.defaultProps = {
  id: 0,
  products: [],
};

function mapStateToProps(state) {
  return {
      allProducts: state.Product.toJS(),
    };
}

export default connect(mapStateToProps)(ListItemGroup);
