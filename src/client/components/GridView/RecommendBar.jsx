import React from 'react';
import PropTypes from 'prop-types';

const renderBarView = ({ product }) => (
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

const RecommendBar = ({ product }) => product.items.length > 1
        ? renderBarView({ product })
        : null;

renderBarView.propTypes = {
  product: PropTypes.object,
};

renderBarView.defaultProps = {
  product: {
    items: [],
    recommendation: {},
  },
};


RecommendBar.propTypes = {
  product: PropTypes.object,
};

RecommendBar.defaultProps = {
  product: {
    items: [],
  },
};

export default RecommendBar;
