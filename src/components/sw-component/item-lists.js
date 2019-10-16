import React from 'react';
import ItemList from '../item-list';
import {withData, withSwapiService} from '../hoc-helper';

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

const mapPersonMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPeople
  }
}

const mapPlanetMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPlanets
  }
}

const mapStarshipMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllStarships
  }
}

const PersonList = withSwapiService(
  withData(
    withChildFunction(ItemList, renderName)),
     mapPersonMethodsToProps);
     
const PlanetList = withSwapiService(
  withData(
    withChildFunction(ItemList, renderName)), 
     mapPlanetMethodsToProps);

const StarshipList = withSwapiService(
  withData(
    withChildFunction(ItemList, renderName)), 
    mapStarshipMethodsToProps);

export {
    PersonList,
    PlanetList,
    StarshipList
}

