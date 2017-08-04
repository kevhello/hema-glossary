import React, {Component} from 'react';
import FilterButton from './FilterButton';
import SearchList from './SearchList';
import {Grid, Row, Col} from 'react-bootstrap';

class SearchView extends Component {
    state = {
        searchInput: '',
        currentFilter: 'ALL',
    };

    onInputChange = (e) => {
        this.setState({searchInput: e.target.value});
    };

    onDropDownChange = (eventKey, e) => {
        this.setState({
            searchFilter: eventKey,
            currentFilter: eventKey
        });
    };

    render() {
        const filterList = ['ALL', 'ITALIAN', 'GERMAN'];

        return(
            <Grid>
                <Row>
                    <Col xs={12} sm={12} md={3}  className="col-lg-offset-3" >
                        <FilterButton
                            id="filter-button"
                            filterList={filterList}
                            currentFilter={this.state.currentFilter}
                            onDropDownChange={this.onDropDownChange}
                        />
                    </Col>
                    <Col xs={12} sm={12} md={6} >
                        <input
                            style={{width: '60%'}}
                            id="input-field"
                            type="text"
                            value={this.state.searchInput}
                            onChange={this.onInputChange}
                            className="form-control"
                        />
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={12}>
                        <SearchList
                            glossary={this.props.glossary}
                            currentFilter={this.state.currentFilter}
                            searchInput={this.state.searchInput}
                        />
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default SearchView;