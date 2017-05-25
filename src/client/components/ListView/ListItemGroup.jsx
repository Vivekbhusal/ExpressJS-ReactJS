import React, {Component} from 'react';
import ListItem from './ListItem'

class ListItemGroup extends Component {

    constructor(props) {
        super(props);
    }

    getGroupHeader(id, length) {
        return (
            <div className="category-header">
                {`${id} (${length})`}
            </div>
        )
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
        )
    }

    render() {
        const {id, products} = this.props;

        return (
            <div className="group-item">

                {this.getGroupHeader(id, products.length)}
                {this.getTitleHeader()}
                <div className="grouped-item-list">
                    {
                        products.map((product, index) => <ListItem key={index} item={product}/>)
                    }
                </div>

            </div>
        )
    }
}

export default ListItemGroup;