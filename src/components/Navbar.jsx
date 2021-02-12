import React from 'react';
import {Link,NavLink} from 'react-router-dom';
const Navbar = (props) => {
    return (
        <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
                         <a className="navbar-brand" to="#">Navbar</a>
                         <span className="badge badge-primary">{props.productsCount}</span>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                            <li className="nav-item ">
                                <NavLink className="nav-link" to="/home">Home <span className="sr-only">(current)</span></NavLink>
                            </li>
                             <li className="nav-item">
                                <NavLink className="nav-link" to="/menu">Menu</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/cart">Shopping Cart</NavLink>
                            </li>
                             <li className="nav-item">
                                <NavLink className="nav-link" to="/admin">Admin</NavLink>
                            </li> 
                             <li className="nav-item">
                                <NavLink className="nav-link" to="/login">Login</NavLink>
                            </li>
                         
                            </ul>
                        </div>
                      </nav>

      );
}
 
export default Navbar;
