import React, {Component} from 'react';
import FilterButton from './FilterButton';
import SearchList from './SearchList';
import AddTermForm from './AddTermForm';
import { Row, Col, Form, FormControl, FormGroup } from 'react-bootstrap';

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
            <Col>
                <Row>
                    <Col className="col-lg-12 col-xs-12 col-md-12">
                        <AddTermForm
                            getTerms={this.props.getTerms}
                            isLoading={this.props.isLoading}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col className="col-lg-12 col-xs-12 col-md-12" >
                        <Form inline id="form-search">
                            <FormGroup>
                            <FilterButton
                                id="filter-button"
                                filterList={filterList}
                                currentFilter={this.state.currentFilter}
                                onDropDownChange={this.onDropDownChange}
                            />
                            </FormGroup>
                            <div id="spacer"></div>
                            <FormGroup bsSize="large">
                            <FormControl
                                id="input-field"
                                type="text"
                                value={this.state.searchInput}
                                onChange={this.onInputChange}
                                className="form-control"
                                placeholder="Search"
                            />
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col className="col-lg-12 col-xs-12 col-md-12" >
                        <SearchList
                            glossary={this.props.glossary}
                            currentFilter={this.state.currentFilter}
                            searchInput={this.state.searchInput}
                        />
                    </Col>
                </Row>
            </Col>
        );
    }
}

export default SearchView;