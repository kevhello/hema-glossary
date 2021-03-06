import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import SearchView from './components/SearchView';
import About from './components/About';
import Header from './components/Header';
import axios from 'axios';
import { Col, Row } from 'react-bootstrap';


class App extends Component {
  componentDidMount(){
      this.getTerms();
  }

  getTerms = async () => {
      try {
          const response = await axios.get('/terms');
          this.setState({
              glossary: response.data.terms,
              error: '',
              isLoading: false,
          });

      } catch (err) {
          this.setState({error: `${err}`});
      }
  };

  renderLoading = () => (
      this.state.isLoading ? <div className="loader" id="loader"></div>: null
  );

  renderAlert = () => (
      this.state.error ? <div>{this.state.error}</div> : null
  );

  state = {
      glossary: [],
      isLoading: true,
      error: ''
  };

  render() {
    return (
        <BrowserRouter>
            <div className="container">
                <Header />
                <Switch>
                    <Route
                        exact path="/"
                        render={() => <SearchView
                            glossary={this.state.glossary}
                            getTerms={this.getTerms}
                            isLoading={this.state.isLoading}
                        /> }
                    />
                    <Route exact path="/about" component={About} />
                </Switch>
                <Row>
                    <Col className="col-lg-12 col-xs-12 col-md-12">
                        {this.renderLoading()}
                        {this.renderAlert()}
                    </Col>
                </Row>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;