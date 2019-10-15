import React from 'react';
import ItemList from '../item-list';
import {withData} from '../hoc-helper';
import SwapiService from '../../services/swapi-service';

const swapiService = new SwapiService();

const {
    getAllPeople,
    getAllPlanets,
    getAllStarships
} = swapiService;

const withChildFunction = (Wrapped, func) => {
  return (props) => {
      return (
        <Wrapped {...props}>
          {func}
        </Wrapped>
      ) ;
  }
}

const renderName = ({name}) => <span>{name}</span>;

const PersonList = withData(
    withChildFunction(ItemList, renderName), 
    getAllPeople);
const PlanetList = withData(
    withChildFunction(ItemList, renderName),
     getAllPlanets);
const StarshipList = withData(
    withChildFunction(ItemList, renderName),
     getAllStarships);

export {
    PersonList,
    PlanetList,
    StarshipList
}
