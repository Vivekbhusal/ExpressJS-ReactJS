import React, {Component} from 'react'

export default class NavigationBar extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="container-full">
                <div className="row store-navbar-wrapper" >
                    <div className="nav nav-bar store-navbar">
                        <div className="total-product-wrapper">
                            <div className="total-label">Total Products</div>
                            <div className="total-number">11</div>
                        </div>
                        <div className="total-cost-wrapper">
                            <div className="total-label">Total Cost</div>
                            <div className="total-number">$1,944.80</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}