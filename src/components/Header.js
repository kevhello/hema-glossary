import React, {Component} from 'react';
import {PageHeader, NavItem, Nav} from 'react-bootstrap';
import PropTypes from 'prop-types';

class Header extends Component {

    state = {
        activeKey: 1,
    };

    static contextTypes = {
        router: PropTypes.object
    };

    handleSelect = (eventKey) => {
        const {history} = this.context.router;

        switch (eventKey) {
            case 1:
                history.push('/');
                this.setState({activeKey: 1});
                break;
            case 2:
                history.push('/about');
                this.setState({activeKey: 2});
                break;
            default:
                break;
        }

    };

    render(){
        return(
            <div>
                <PageHeader>HEMA Glossary <small>Historical European Martial Arts Glossary</small></PageHeader>
                <Nav bsStyle="tabs" justified activeKey={this.state.activeKey} onSelect={this.handleSelect}>
                    <NavItem eventKey={1}>Home</NavItem>
                    <NavItem eventKey={2}>About</NavItem>
                </Nav>
            </div>
        );
    }
}

export default Header;