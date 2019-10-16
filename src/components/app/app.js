import React, { Component } from "react";
import Header from "../header";
import RandomPlanet from "../random-planet";
import {PeoplePage, PlanetsPage, StarshipsPage} from '../pages'
import SwapiService, {DummySwapiService} from "../../services/swapi-service";
import {SwapiServiceProvider} from '../swapi-service-context';

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
        <div>
        <Header onServiceChange={this.onServiceChange}/>
        <RandomPlanet/>

        <PeoplePage/>
        <PlanetsPage/>
        <StarshipsPage/>

      </div>
      </SwapiServiceProvider>
    );
  }
}
