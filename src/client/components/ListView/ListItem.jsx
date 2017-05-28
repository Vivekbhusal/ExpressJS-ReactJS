import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isInteger } from 'lodash';

class ListItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      noOfCarton: this.props.item.noOfCarton,
      error: null,
    };

    this.handleCartonChange = this.handleCartonChange.bind(this);
  }

  handleCartonChange(event) {
    if (isInteger(parseInt(event.target.value, 10)) && event.target.value < 100) {
      this.setState({
        noOfCarton: event.target.value,
        error: null,
      });

      return this.props.handleCartonChange(this.props.itemDetails, event.target.value);
    }

    this.setState({
      noOfCarton: event.target.value,
      error: 'Only positive number < 100 accepted',
    });

    return true;
  }

  render() {
    const { item, itemDetails, handleRemove } = this.props;
    return (
      <div className="row list-item">
        <div className="col-md-2 col-xs-12 image">
          <img src={itemDetails.imageUrl} alt="product" />
        </div>
        <div className="col-md-2 col-xs-7 name">
          {itemDetails.title}
        </div>
        <div className="col-md-1 col-xs-5 unit-cost">
          {`$${itemDetails.unitCost}`}
        </div>
        <div className="col-md-2 col-xs-7 pack-size">
          {itemDetails.packSize}
        </div>
        <div className="col-md-1 col-xs-5 unit-carton">
          {itemDetails.unitsInCartons}
        </div>
        <div className="col-md-2 col-xs-7 carton-number">
          <input value={this.state.noOfCarton} onChange={this.handleCartonChange} />
          <small className="errorMessage">{this.state.error}</small>

        </div>
        <div className="col-md-1 col-xs-5 value">
          {`$${item.value.toFixed(2)}`}
        </div>
        <div className="col-md-1 col-xs-12 actions">
          <span className="delete" onClick={handleRemove} />
        </div>
      </div>
    );
  }
}

ListItem.propTypes = {
  item: PropTypes.shape({
    noOfCarton: PropTypes.number,
    value: PropTypes.number,
  }),
  itemDetails: PropTypes.shape({
    imageUrl: PropTypes.string,
    title: PropTypes.string,
    unitCost: PropTypes.number,
    packSize: PropTypes.number,
    unitsInCartons: PropTypes.number,
  }),
  handleCartonChange: PropTypes.func,
  handleRemove: PropTypes.func,
};

ListItem.defaultProps = {
  itemDetails: {
    imageUrl: '',
    title: '',
    unitCost: 0,
    packSize: 0,
    unitsInCartons: 0,
  },
  item: {
    noOfCarton: 0,
    value: 0,
  },
  handleCartonChange: () => {},
  handleRemove: () => {},
};

export default ListItem;
