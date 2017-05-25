import React, {Component} from 'react';
import NavigationBar from '../components/NavigationBar';
import ViewSelector from '../components/ViewSelector';
import ListView from '../components/ListView';
class MainLayout extends Component {

    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div className="layout-container">
                <NavigationBar/>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-10 store-container-wrapper center">
                            <ViewSelector/>
                            <ListView/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MainLayout;