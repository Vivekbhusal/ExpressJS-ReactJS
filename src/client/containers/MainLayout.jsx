import React, { Component } from 'react';
import NavigationBar from '../components/NavigationBar';
import ViewSelector from '../components/ViewSelector';
import ListView from '../components/ListView';
import GridView from '../components/GridView';

class MainLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
        displayType: 'grid',
      };

    this.changeDisplayType = this.changeDisplayType.bind(this);
  }

  changeDisplayType(type) {
    this.setState({
        displayType: type,
      });
  }

  render() {
    return (
        <div className="layout-container">
                <NavigationBar />

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-10 store-container-wrapper center">
                            <ViewSelector displayType={this.state.displayType} handleChange={this.changeDisplayType} />
                            {
                            this.state.displayType == 'list'
                            ? <ListView />
                            : <GridView/>
                        }
                        </div>
                    </div>
                </div>
            </div>
    );
  }
}

export default MainLayout;
