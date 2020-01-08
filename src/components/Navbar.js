import React, {Component} from "react";
import {Link} from "react-router-dom";
import {FaBars} from 'react-icons/fa'
import logo from "../img/Google__G__Logo 1logo.png";



export class Navbar extends Component {
    state = {
        isOpen: false

    };
    handleToggle = () => {
        this.setState({isOpen: !this.state.isOpen});
    };

    render() {
        return <nav className="navbar  navbar-expand-lg ">
            <div className="navbar-brand">
                <img src={logo} className="G-logo" alt="G-logo"/>
            </div>
              <div className="nav-center">
                        <ul className="nav-links">
                            <Link to='/'>
                                <li>Главная</li>
                            </Link>
                            <Link to='/catalog'>
                                <li>Каталог</li>
                            </Link>
                            <Link to='/projects'>
                                <li>Проекты</li>
                            </Link>
                            <Link to='/about'>
                                <li>О компании</li>
                            </Link>
                            <Link to='/contacts'>
                                <li>Контакты</li>
                            </Link>
                        </ul>
                </div>
                    <button type="button" className="nav-btn" onClick={this.handleToggle}>
                        <FaBars className='nav-icon'/>
                    </button>
        </nav>
    }
}
