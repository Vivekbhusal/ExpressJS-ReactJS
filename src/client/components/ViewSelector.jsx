import React, {Component} from 'react';

export default class ViewSelector extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selected : "list"
        };

        this.onSelect = this.onSelect.bind(this);
    }

    onSelect(type) {
        this.setState({
            selected : type
        })
    }

    render() {
        return (
            <div className="row">
                <div className="view-selector">
                    <span className="list" onClick={() => this.onSelect("list")}></span>
                    <span className="grid" onClick={() => this.onSelect("grid")}></span>
                </div>
            </div>
        )
    }
}