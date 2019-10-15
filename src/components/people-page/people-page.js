import React, { Component } from "react";
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import SwapiService from '../../services/swapi-service';
import Row from '../row';

import './people-page.css';



export default class PeoplePage extends Component {

  swapiService = new SwapiService();

  state = {
    selectedPerson: 1
  };

  onPersonSelected = selectedPerson => {
    this.setState({ selectedPerson });
  };

  render() {

    const itemList = (
      <ItemList onItemSelected={this.onPersonSelected} 
          getData={this.swapiService.getAllPeople} 
          renderItem={({name, gender, birthYear}) => 
          `${name} (${gender} ${birthYear})`} />
    );

    const personDetails = (
      <PersonDetails personId={this.state.selectedPerson} />
    );

    return (
      <Row left={itemList} right={personDetails} />
    );
  }
}
