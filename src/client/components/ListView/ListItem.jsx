import React, {Component} from 'react';

export default class ListItem extends Component {

    render() {
        const {image, name, unit_cost, pack_size, carton_unit, no_of_carton, value} = this.props.item;

        return (
            <div className="row list-item">
                <div className="col-md-2 image">
                    <img src={image}/>
                </div>
                <div className="col-md-2 name">
                    {name}
                </div>
                <div className="col-md-1 unit-cost">
                    {`$${unit_cost}`}
                </div>
                <div className="col-md-2 pack-size">
                    {pack_size}
                </div>
                <div className="col-md-1 unit-carton">
                    {carton_unit}
                </div>
                <div className="col-md-2 carton-number">
                    <input value={no_of_carton}/>
                </div>
                <div className="col-md-1 value">
                    {`$${value}`}
                </div>
                <div className="col-md-1 actions">
                    <span className="delete"></span>
                </div>
            </div>
        )
    }
}