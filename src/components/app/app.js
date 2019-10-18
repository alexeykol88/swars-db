import React, { Component } from "react";
import Header from "../header";
import RandomPlanet from "../random-planet";
import {PeoplePage, PlanetsPage, StarshipsPage} from '../pages'
import SwapiService, {DummySwapiService} from "../../services/swapi-service";
import {SwapiServiceProvider} from '../swapi-service-context';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import "./app.css";

export default class App extends Component {

  state ={
    selectedPerson: 1,
    swapiService: new SwapiService()
  }

  onServiceChange = () => {
    this.setState(({ swapiService }) => {
      
      const Service = swapiService instanceof SwapiService 
            ? DummySwapiService : SwapiService;
      return {
        swapiService: new Service()
      }    
    })
  }

  onPersonSelected = selectedPerson => {
    this.setState({ selectedPerson });
  };


  render() {

    return (
      <SwapiServiceProvider value={this.state.swapiService}>
       <Router>
         <div>
          <Header onServiceChange={this.onServiceChange}/>
          <RandomPlanet/>

          <Switch>
            <Route path="/" exact render={() => <h2>Welcome to Star Wars data base</h2>}/>
            <Route path="/people/:id?" component={PeoplePage}/>
            <Route path="/planets/:id?" component={PlanetsPage}/>
            <Route path="/starships/:id?" component={StarshipsPage}/>
            <Route render={() => <h2>Page not found</h2>}/>
          </Switch>

        </div>
       </Router>
      </SwapiServiceProvider>
    );
  }
}
