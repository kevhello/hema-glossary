import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Navbar, NavItem, Nav} from 'react-bootstrap';

class Header extends Component {
    render(){
        return(
            <Navbar inverse collapseOnSelect className="header">
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">HEMA Glossary</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={2} ><Link to="/about">About</Link></NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header;