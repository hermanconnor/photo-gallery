import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import apiKey from './components/config';
import axios from 'axios';
// COMPONENT IMPORTS
import SearchForm from './components/SearchForm';
import Nav from './components/Nav';
import Gallery from './components/Gallery';
import NotFound from './components/NotFound';
import FourOFour from './components/FourOFour';

class App extends Component {
  state = {
    sunrise: [],
    butterflies: [],
    sunset: [],
    search: [],
    query: '',
    loading: true,
  };

  // Request three default topics when app first loads
  componentDidMount() {
    this.performSearch('sunrise');
    this.performSearch('butterflies');
    this.performSearch('sunset');
  }

  // Search Performs API Request and Update State
  performSearch = (query) => {
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
      )
      .then((response) => {
        // Update The State Based On Search
        if (query === 'sunrise') {
          this.setState({
            sunrise: response.data.photos.photo,
            loading: false,
            query: query,
          });
        } else if (query === 'butterflies') {
          this.setState({
            butterflies: response.data.photos.photo,
            loading: false,
            query: query,
          });
        } else if (query === 'sunset') {
          this.setState({
            sunset: response.data.photos.photo,
            loading: false,
            query: query,
          });
        } else {
          this.setState({
            search: response.data.photos.photo,
            loading: false,
            query: query,
          });
        }
      })
      .catch((error) => {
        console.log('Error: ', error);
      });
  };

  render() {
    return (
      <div className="container">
        <Router>
          <SearchForm onSearch={this.performSearch} />
          <Nav />
          <Switch>
            <Route
              exact
              path="/"
              render={() =>
                this.state.loading ? (
                  <p>Loading...</p>
                ) : (
                  <Gallery data={this.state.sunrise} query="sunrise" />
                )
              }
            />
            <Route
              path="/sunrise"
              render={() =>
                this.state.loading ? (
                  <p>Loading...</p>
                ) : (
                  <Gallery data={this.state.sunrise} query="sunrise" />
                )
              }
            />
            <Route
              path="/butterflies"
              render={() =>
                this.state.loading ? (
                  <p>Loading...</p>
                ) : (
                  <Gallery data={this.state.butterflies} query="butterflies" />
                )
              }
            />
            <Route
              path="/sunset"
              render={() =>
                this.state.loading ? (
                  <p>Loading...</p>
                ) : (
                  <Gallery data={this.state.sunset} query="sunset" />
                )
              }
            />
            <Route
              path="/search/:id"
              render={() =>
                this.state.loading ? (
                  <p>Loading...</p>
                ) : (
                  <Gallery data={this.state.search} query={this.state.query} />
                )
              }
            />
            <Route component={NotFound} />
            <Route component={FourOFour} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
