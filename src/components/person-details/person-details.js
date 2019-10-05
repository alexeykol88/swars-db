import React, { Component } from "react";
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';

import './person-details.css';

export default class PersonDetails extends Component {

  swapiService = new SwapiService();

  state = {
    person: null,
    loading: true
  }

  updatePerson() {
    this.setState({loading: true})
    const {personId} = this.props;
    if (!personId) {
      return;
    }

    this.swapiService.getPerson(personId)
          .then((person) => {
            this.setState({person})
          })
          .then(() => {this.setState({loading: false})});
          
  }

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId) {
      this.updatePerson();
    }
  }


  render() {

    const {person, loading} = this.state;

    const load = loading ? <Spinner/> : null;
    const viewDetails = loading ? null : <ViewDetails person={person}/>;

    if (!this.state.person) {
      return <span>Select a person from a list</span>
    }

    return (
      <div className="person-details card">
        {load}
        {viewDetails}
      </div>
    );
  }
}

const ViewDetails = ({person}) => {

  const {id, name, gender, birthYear, eyeColor} = person;

  return (
    <React.Fragment>
      <img
          className="person-image"
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} alt="Error"
        />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender:</span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth year:</span>
              <span>{birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye color:</span>
              <span>{eyeColor}</span>
            </li>
          </ul>
        </div>
    </React.Fragment>
  )
}
