import React from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorButton from "../error-button";
import ItemList from "../item-list";
import PersonDetails from "../person-details";

import "./app.css";
import PeoplePage from "../people-page/people-page";
import ErrorIndicator from "../error-indicator";
import SwapiService from "../../services/swapi-service";

export default class App extends React.Component {
  swapiService = new SwapiService();

  state = {
    showRandomPlanet: true,
    hasError: false
  };

  toggleRandomPlanet = () => {
    this.setState(state => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      };
    });
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

    return (
      <div className="stardb-app">
        <Header />
        {planet}

        <div className="row mb2 button-row">
          <button
            className="toggle-planet btn btn-warning btn-lng"
            onClick={this.toggleRandomPlanet}
          >
            Toggle Random Planet
          </button>
          <ErrorButton />
        </div>

        <PeoplePage />
        <PeoplePage />

        <div className="row mb2" style={{margin: '50px', marginLeft: '0'}}>
          <div className="col-md-6">
            <ItemList
              onPersonSelected={this.onPersonSelected}
              getData={this.swapiService.getAllPlanets}
            />
          </div>
          <div className="col-md-6">
            <PersonDetails
              personId={this.state.selectedPerson}
              dataName={'planet'}
            />
          </div>
        </div>

        <div className="row mb2" style={{margin: '50px', marginLeft: '0'}}>
          <div className="col-md-6">
            <ItemList
              onPersonSelected={this.onPersonSelected}
              getData={this.swapiService.getAllStarships}
            />
          </div>
          <div className="col-md-6">
            <PersonDetails
              personId={this.state.selectedPerson}
              dataName={'starship'}
            />
          </div>
        </div>
      </div>
    );
  }
}
