import React, {Component} from 'react';
import Row from '../row';
import {PersonList, PersonDetails} from '../sw-component';

export default class PeoplePage extends Component {

    state = {
        onItemSelected: null
    }

    onItemSelected = (selectedItem) => {
      this.setState({selectedItem});
    }

    render() {
        const {selectedItem} = this.state;

        return (
            <Row
            left={<PersonList onItemSelected={this.onItemSelected}/>}
            right={<PersonDetails itemId={selectedItem}/>}/>
        )
    }
}
