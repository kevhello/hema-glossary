import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {PageHeader, NavItem, Nav} from 'react-bootstrap';

class Header extends Component {
    render(){
        return(
            <div>
                <PageHeader>HEMA Glossary <small>{"\n"}Historical European Martial Arts Glossary</small></PageHeader>
                <Nav bsStyle="tabs" justified activeKey={1} onSelect={this.handleSelect}>
                    <NavItem eventKey={1}><Link to="/">Home</Link></NavItem>
                    <NavItem eventKey={2}><Link to="/about">About</Link></NavItem>
                </Nav>
            </div>
        );
    }
}

export default Header;