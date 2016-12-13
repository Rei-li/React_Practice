import React from 'react';

import './menu.css';
import './__link/menu__link.css';

class Menu extends React.Component {

    constructor(props) {
        super(props);
    }

    render(){
        return(
            <nav>
                <span className="menu__link"><a href="/depots">Depots</a></span>
                <span className="menu__link"><a href="/depots">Depots</a></span>
            </nav>
        )
    }
}
export default Menu;