import React, { Component } from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import SearchView from './components/SearchView';
import About from './components/About';
import Header from './components/Header';
import glossary from './glossary'; // A data file containing the terms
import axios from 'axios';

import AddTermForm from './components/AddTermForm';


class App extends Component {
  componentDidMount(){
      this.getTerms();
  }

  getTerms = async () => {
      try {
          const GET_URL = 'http://localhost:3090/terms';
          const response = await axios.get(GET_URL);
          this.setState({
              glossary: response.data.terms,
              error: '',
              isLoading: false,
          });

      } catch (err) {
          this.setState({error: `Error in fecthing terms: ${err}`});
      }
  };

  renderLoading = () => (
      this.state.isLoading ? <div className="loader"></div> : null
  );

  renderAlert = () => (
      this.state.error ? <div>this.state.error</div> : null
  );

  state = {
      glossary: glossary,
      isLoading: true,
      error: ''
  };

  render() {
    return (
        <HashRouter>
            <div className="container">
                {/*<Header />*/}
                <AddTermForm getTerms={this.getTerms}/>
                <Switch>
                    <Route
                        exact path="/"
                        render={() => <SearchView glossary={this.state.glossary} /> }
                    />
                    <Route exact path="/about" component={About} />
                </Switch>
                {this.renderLoading()}
                {this.renderAlert()}
          </div>
        </HashRouter>
    );
  }
}

export default App;