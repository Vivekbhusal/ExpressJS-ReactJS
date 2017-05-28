import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loading from 'react-loading';
import PropTypes from 'prop-types';
import { find } from 'lodash';
import { getProductList } from '../actions/Products';
import RecommendBar from './GridView/RecommendBar';
import ProductItem from './GridView/ProductItem';
import { addProduct } from '../actions/ShoppingCart';


class GridView extends Component {

  constructor(props) {
    super(props);
    this.renderProductGrid = this.renderProductGrid.bind(this);
  }

  componentWillMount() {
    this.props.dispatch(getProductList());
  }

  addItem(product) {
    product.items.map((item) => {
        const product = find(this.props.cart, { id: item.id });

      const noOfCarton = (product && product.noOfCarton) ? ++product.noOfCarton : 1;

      return this.props.dispatch(addProduct(
          {
            id: item.id,
            noOfCarton: noOfCarton,
            value: item.unitCost * item.unitsInCartons * noOfCarton,
            category: item.category,
          },
        ));
    });
  }

  isLoading() {
    return this.props.products.loading;
  }

  renderProductGrid() {
    return this.props.products.products.map((product, key) => {
      const length = product.items.length;
      const className = `product-item-wrapper-container col-md-${length * 2}`;

      return (<div key={key} className={className}>
              <div className="product-item-wrapper ">
                <div className="item-wrapper">
                  {product.items.map((item, key) => <ProductItem key={key} item={item}/>)}
                </div>

                <RecommendBar product={product}/>
              </div>
              <div className="add-action" onClick={() => this.addItem(product)}></div>
            </div>);
          }, this);
  }

  render() {
    return (
      <div className="gridview-list">
          {
            this.isLoading()
                ? <Loading type="cubes" color="#0b9a98" height={200} width={200} />
                : <div className="row ">
                  {this.renderProductGrid()}
                </div>
          }
        </div>
    );
  }
}

GridView.defaultProps = {
    products: {},
    cart: {},
};

GridView.propTypes = {
    products: PropTypes.object,
    cart: PropTypes.object,
};


const mapStateToProps = (store) => ({
        products: store.Product.toJS(),
        cart: store.ShoppingCart.toJS(),
      });

export default connect(mapStateToProps)(GridView);
