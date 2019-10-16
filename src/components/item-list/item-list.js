import React from "react";

import './item-list.css';


const  ItemList = (props) => {
   const {data, onItemSelected, children: renderLabel} = props;

    const items = data.map((item, indx) => {
      if (indx < 5) {
      const { id } = item;
      const label = renderLabel(item);

      return (
        <li className="list-group-item" 
        key={id}
        onClick={() => onItemSelected(id)}>
        {label}
        </li>
      )
      } else {
        return null;
      }
    });

    return (
      <ul className="item-list list-group">
        {items}
      </ul>
    );
  }

  ItemList.defaultProps = {
    onItemSelected: () => {}
  }

export default ItemList;
