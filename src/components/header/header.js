import React, { Component } from "react";
import {Link} from 'react-router-dom';

import './header.css';

export default class Header extends Component {

  render() {

    const {onServiceChange} = this.props;

    return (
      <div className="header d-flex">
        <h3>
          <Link to="/">Star Wars DB</Link>
        </h3>
        <ul className="d-flex">
          <li>
            <Link to="/people/">People</Link>
          </li>
          <li>
          <Link to="/planets/">Planets</Link>
          </li>
          <li>
          <Link to="/starships/">Starships</Link>
          </li>
        </ul>
        <button className="btn btn-primary btn-sm"
        onClick={onServiceChange}>
          Change Service
        </button>
      </div>
    );
  }
}
