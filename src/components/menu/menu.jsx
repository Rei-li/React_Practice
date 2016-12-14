import React from 'react';
import { Link} from 'react-router'

import './menu.css';
import './__link/menu__link.css';

class Menu extends React.Component {

    constructor(props) {
        super(props);
    }

    render(){
        return(
            <nav>                
                <span className="menu__link">
                     <Link to='/depots'>Depots</Link>
                </span>
            </nav>
        )
    }
}
export default Menu;