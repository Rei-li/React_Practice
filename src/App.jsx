import React from 'react';
import { Router, Route, IndexRoute, browserHistory, Link} from 'react-router'

import DepotsList from './components/depotList/depotsList.jsx';
import Menu from './components/header/header.jsx';

import './App.css';


class App extends React.Component {

    constructor(props) {
        super(props);
    }
    
    render(){
        return( 
            <div>
                <Menu/>
            <Router history={browserHistory}>                
                <Route path='/' component={DepotsList}>                    
                    <Route path='depots' component={DepotsList} />
                </Route>
            </Router>
   
            {this.props.children}
        </div>
        )
    }
}
export default App;
