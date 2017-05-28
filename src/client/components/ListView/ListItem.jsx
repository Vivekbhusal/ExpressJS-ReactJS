import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isInteger } from 'lodash';

class ListItem extends Component{

  constructor(props) {
    super(props);
    this.state = {
        noOfCarton: this.props.item.noOfCarton,
        error: null,
      };

    this.handleCartonChange = this.handleCartonChange.bind(this);
  }

  handleCartonChange(event) {

    if (isInteger(parseInt(event.target.value)) && event.target.value < 100) {
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

  }

  render() {
    const { item, itemDetails, handleRemove } = this.props;
    return (
        <div className="row list-item">
                <div className="col-md-2 image">
                    <img src={itemDetails.imageUrl} alt="product" />
                </div>
                <div className="col-md-2 name">
                    {itemDetails.title}
                </div>
                <div className="col-md-1 unit-cost">
                    {`$${itemDetails.unitCost}`}
                </div>
                <div className="col-md-2 pack-size">
                    {itemDetails.packSize}
                </div>
                <div className="col-md-1 unit-carton">
                    {itemDetails.unitsInCartons}
                </div>
                <div className="col-md-2 carton-number">
                    <input value={this.state.noOfCarton} onChange={this.handleCartonChange}/>
                    <small className="errorMessage">{this.state.error}</small>

                </div>
                <div className="col-md-1 value">
                    {`$${item.value.toFixed(2)}`}
                </div>
                <div className="col-md-1 actions">
                    <span className="delete" onClick={ handleRemove } />
                </div>
            </div>
    );
  }
}

// ListItem.propTypes = {
//   item: PropTypes.shape({
//     image: PropTypes.string,
//     name: PropTypes.string,
//     unitCost: PropTypes.number,
//     packSize: PropTypes.number,
//     cartonUnit: PropTypes.number,
//     noOfCarton: PropTypes.number,
//     value: PropTypes.number,
//   }),
// };
//
// ListItem.defaultProps = {
//   item: {
//   imageUrl: '',
//     name: '',
//     unitCost: 0,
//     packSize: 0,
//     cartonUnit: 0,
//     noOfCarton: 0,
//     value: 0,
//   },
// };

export default ListItem;
