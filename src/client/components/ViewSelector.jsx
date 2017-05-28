import React, {Component} from 'react';
import ClassNames from 'classnames';

export default class ViewSelector extends Component {

    render() {
        const gridClass = ClassNames('grid', {'active': this.props.displayType == 'grid'})
        const listClass = ClassNames('list', {'active': this.props.displayType == 'list'})
        return (
            <div className="row">
                <div className="view-selector">
                    <span className={ gridClass } onClick={() => this.props.handleChange('grid')}></span>
                    <span className={ listClass } onClick={() => this.props.handleChange('list')}></span>
                </div>
            </div>
        )
    }
}