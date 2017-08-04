import React, {Component} from 'react';
import {DropdownButton, MenuItem} from 'react-bootstrap';


class FilterButton extends Component {
    capitalizeString = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    };

    render(){
        const menuItems = this.props.filterList.map( (filter, i) => {
                const isCurrentFilter = this.props.currentFilter === filter;
                return (
                    <MenuItem
                        key={i}
                        eventKey={filter}
                        active={isCurrentFilter}
                    >{this.capitalizeString(filter)}</MenuItem>);
            }
        );

        return(
            <DropdownButton
                bsSize="lg"
                bsStyle="primary"
                title="Langauge"
                id={`dropdown-basic`}
                onSelect={this.props.onDropDownChange}
            >
                {menuItems}
            </DropdownButton>
        );
    }
}

export default FilterButton;