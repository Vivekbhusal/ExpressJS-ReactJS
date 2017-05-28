import React, { Component } from 'react';

class RecommendBar extends Component {

  renderBarView(product) {
    return (
        <div className="recommendation-bar">
            <div className="total-item-wrapper">
                <div className="total-item">
                    <span className="number">{product.items.length}</span>
                    <span className="label">Items</span>
                </div>
                <div className="desc">
                    Sells well together*
                </div>
            </div>
            <div className="recommended-percentage">
                <div className="percentage">{`${product.recommendation.currentLevel}%`}</div>
                <div className="desc">RECOMMENDED*</div>
            </div>
        </div>
    );
  }

  render() {
    return this.props.product.items.length > 1
        ? this.renderBarView(this.props.product)
        : null;
  }
}

export default RecommendBar;