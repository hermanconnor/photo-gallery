import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import apiKey from './components/config';
import axios from 'axios';
import SearchForm from './components/SearchForm';
import Nav from './components/Nav';
import PhotoContainer from './components/PhotoContainer';
import NotFound from './components/NotFound';
import FourOFour from './components/FourOFour';

class App extends Component {
  state = {
    sunrise: [],
    aurora: [],
    sunset: [],
    search: [],
    loading: true,
  };

  // Request and load default topics when app first loads
  componentDidMount() {
    this.performSearch('sunrise');
    this.performSearch('aurora');
    this.performSearch('sunset');
  }

  performSearch = (query = 'sunrise') => {
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
      )
      .then(response => {
        if (query === 'sunrise') {
          this.setState({
            sunrise: response.data.photos.photo,
            loading: false,
          });
        } else if (query === 'aurora') {
          this.setState({
            aurora: response.data.photos.photo,
            loading: false,
          });
        } else if (query === 'sunset') {
          this.setState({
            sunset: response.data.photos.photo,
            loading: false,
          });
        } else {
          let search = this.state.search;
          search[query] = response.data.photos.photo;
          this.setState({
            search: search,
            loading: false,
          });
        }
      })
      .catch(error => {
        console.log('Error: ', error);
      });
  };

  render() {
    return (
      <Router>
        <div className="container">
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
                  <PhotoContainer data={this.state.sunrise} />
                )
              }
            />
            <Route
              path="/sunrise"
              render={() =>
                this.state.loading ? (
                  <p>Loading...</p>
                ) : (
                  <PhotoContainer data={this.state.sunrise} />
                )
              }
            />
            <Route
              path="/aurora"
              render={() =>
                this.state.loading ? (
                  <p>Loading...</p>
                ) : (
                  <PhotoContainer data={this.state.aurora} />
                )
              }
            />
            <Route
              path="/sunset"
              render={() =>
                this.state.loading ? (
                  <p>Loading...</p>
                ) : (
                  <PhotoContainer data={this.state.sunset} />
                )
              }
            />
            <Route
              path="/search/:subject"
              render={({ match }) =>
                this.state.loading ? (
                  <p>Loading...</p>
                ) : (
                  <PhotoContainer
                    data={this.state.search[match.params.subject]}
                  />
                )
              }
            />
            <Route component={NotFound} />
            <Route component={FourOFour} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
