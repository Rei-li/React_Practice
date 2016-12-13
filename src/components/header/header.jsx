import React from 'react';
import Menu from '../menu/menu.jsx';
import './header.css';

class Header extends React.Component {

    constructor(props) {
        super(props);
    }

    render(){
        return(
            <header>
                <Menu/>
            </header>
        )
    }
}
export default Header;