import React, {Component} from 'react';
import ListItemGroup from './ListView/ListItemGroup';
import { groupBy, map } from 'lodash';

export default class ListView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            product : [
                {
                    id: 1,
                    image : "https://s-media-cache-ak0.pinimg.com/236x/36/f7/28/36f72825859dd55103f6a73c3145b8eb.jpg",
                    name : "Beanskin mimphis",
                    unit_cost : "14.27",
                    pack_size : "1",
                    carton_unit : "20",
                    no_of_carton : "1",
                    value : "284.5",
                    category : "Beanbag Skins"
                },
                {
                    id: 2,
                    image : "https://s-media-cache-ak0.pinimg.com/236x/36/f7/28/36f72825859dd55103f6a73c3145b8eb.jpg",
                    name : "Beanskin Teardrop grey",
                    unit_cost : "9.76",
                    pack_size : "1",
                    carton_unit : "20",
                    no_of_carton : "1",
                    value : "195.20",
                    category : "Beanbag Skins"
                },
                {
                    id: 3,
                    image : "https://s-media-cache-ak0.pinimg.com/236x/36/f7/28/36f72825859dd55103f6a73c3145b8eb.jpg",
                    name : "Havana rattan chair",
                    unit_cost : "34.71",
                    pack_size : "1",
                    carton_unit : "4",
                    no_of_carton : "1",
                    value : "138.84",
                    category : "Chairs"
                },

            ]
        }
    }

    render() {
        return (
            <div className="row list-view">
                {
                    map (
                        groupBy(this.state.product, (item)=> item.category),
                        (products, key) => <ListItemGroup key={key} id={key} products={products} />
                    )

                }
            </div>

        )
    }
}
