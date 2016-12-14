import React from 'react';
import { Router, Route, browserHistory} from 'react-router'

import DepotsList from './components/depotList/depotsList.jsx';
import DrugUnitsList from './components/drugUnitsList/drugUnitsList.jsx';
import App from './App.jsx';

import './App.css';


class AppRouter extends React.Component {

    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div>
                <Router history={browserHistory}>
                        <Route component={App}>
                            <Route path="/" component={DepotsList}/>                           
                            <Route path='depots' component={DepotsList} />
                            <Route path='units' component={DrugUnitsList} />
                        </Route>           
                </Router>
                {this.props.children}
            </div>
        )
    }
}
export default AppRouter;
