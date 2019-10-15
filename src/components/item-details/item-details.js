import React, { Component } from "react";
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';

import './item-details.css';

const Record = ( { item, field , label } ) => {
  return (
    <li className="list-group-item">
              <span className="term">{label}</span>
              <span>{item[field]}</span>
    </li>
  );
}

export {
  Record
};

export default class ItemDetails extends Component {

  swapiService = new SwapiService();

  state = {
    item: null,
    image: null,
    loading: true
  }

  updateItem() {
    this.setState({loading: true})
    const {itemId, getData, getImageUrl} = this.props;
    if (!itemId) {
      return;
    }

    getData(itemId)
          .then((item) => {
            this.setState({
                item,
                image: getImageUrl(item)
            })
          })
          .then(() => {this.setState({loading: false})});
          
  }

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }


  render() {

    const {item, loading, image} = this.state;

    const load = loading ? <Spinner/> : null;
    const viewDetails = loading ? null : <ViewDetails item={item} image={image} 
    child={
      React.Children.map(this.props.children, (child, idx) => {
        return React.cloneElement(child, { item });
      })
    }/>;

    if (!this.state.item) {
      return <span>Select an item from a list</span>
    }

    return (
      <div className="item-details card">
        {load}
        {viewDetails}
      </div>
    );
  }
}

const ViewDetails = ({item, image, child}) => {

  const {name} = item;

  return (
    <React.Fragment>
      <img
          className="item-image"
          src={image} alt="Error"
        />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
           {child}
          </ul>
        </div>
    </React.Fragment>
  )
}
