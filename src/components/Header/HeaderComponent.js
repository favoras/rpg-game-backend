import React, {Component} from 'react';


class HeaderComponent extends Component {

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-secondary">
                        <div><a href="http://localhost:3000/" className="navbar-brand">RPG Game - WIP</a></div>
                        <div><a href="http://localhost:3000/shop" className="navbar-light">Shop</a></div>
                        <div><a href="http://localhost:3000/cart" className="navbar-light" style={{marginLeft: "15px"}}>Cart</a></div>
                        <div><a href="http://localhost:3000/" className="navbar-light" style={{marginLeft: "15px"}}>Char List</a></div>
                        <div><a href="http://localhost:3000/fight" style={{marginLeft: "15px"}}><button className="btn btn-outline-success my-2 my-sm-0" type="submit">FIGHT</button></a></div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;