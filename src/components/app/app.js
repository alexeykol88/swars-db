import React, { Component } from "react";
import Header from "../header";
import RandomPlanet from "../random-planet";
import ItemList from '../item-list';
import ItemDetails, {Record} from '../item-details';
import SwapiService from "../../services/swapi-service";
import Row from '../row';
import {PersonList, PlanetList, StarshipList,
     PersonDetails, PlanetDetails, StarshipDetails} from '../sw-component';

import "./app.css";


export default class App extends Component {

  swapiService = new SwapiService();

  state ={
    selectedPerson: 1
  }

  onPersonSelected = selectedPerson => {
    this.setState({ selectedPerson });
  };


  render() {

    const {getPerson, getStarship,
              getPersonImage, getStarshipImage} = this.swapiService;

    const personDetails = (
      <ItemDetails 
      itemId={11} 
      getData={getPerson}
      getImageUrl={getPersonImage}> 

      <Record field="gender" label="Gender"/>
      <Record field="eyeColor" label="Eye Color"/>

      </ItemDetails>
    );

    const starshipDetails = (
      <ItemDetails itemId={5} getData={getStarship}
      getImageUrl={getStarshipImage}>

        <Record field="model" label="Model"/>
        <Record field="length" label="Length"/>
        <Record field="costInCredits" label="Cost"/>

      </ItemDetails>
    );

    return (
      <div>
        <Header />
        <RandomPlanet/>

        <PersonDetails itemId={5}/>

        <PlanetDetails itemId={5}/>

        <StarshipDetails itemId={5}/>

        <PersonList
            onItemSelected={() => {}}/>


        <PlanetList
            onItemSelected={() => {}}/>
           

        <StarshipList
            onItemSelected={() => {}}/>
        

      </div>
    );
  }
}
