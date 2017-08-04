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
          const GET_URL = 'http://localhost:3090/terms';
          // const GET_URL = 'https://hema-glossary.herokuapp.com/terms';
          const response = await axios.get(GET_URL);
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
      this.state.isLoading ? <div className="loader"></div> : null
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
                {/*<Header />*/}

                <Switch>
                    <Route
                        exact path="/"
                        render={() => <SearchView
                            glossary={this.state.glossary}
                            getTerms={this.getTerms}
                        /> }
                    />
                    <Route exact path="/about" component={About} />
                </Switch>
                <Row>
                    <Col>
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