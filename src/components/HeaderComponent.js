import React, { Component } from 'react';
import {
    Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import Welcome from './WelcomeComponent';

class Header extends Component {
    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);

        this.state = {
            isNavOpen: false,
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <React.Fragment>
                <Navbar light expand="md" fixed="top">
                    <div className="container">
                        <NavbarBrand className="mr-auto" href="/">
                            <img src="assets/images/logo.svg" height="30" width="41" alt="notebook"></img>
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar className="ml-auto">
                                <NavItem>
                                    <NavLink className="nav-link" to='/home' onClick={this.toggleNav}><span className="fa fa-home fa-lg fa-fw"></span> Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/about' onClick={this.toggleNav}><span className="fa fa-terminal fa-lg fa-fw"></span> About me</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/projects' onClick={this.toggleNav}><span className="fa fa-file-archive-o fa-lg fa-fw"></span> Projects</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/contact' onClick={this.toggleNav}><span className="fa fa-pencil fa-lg fa-fw"></span> Contact me</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <Welcome />
                                <p></p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </React.Fragment>
        );
    }
}

export default Header;