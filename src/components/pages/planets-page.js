import React, {Component} from 'react';
import Row from '../row';
import {PlanetList, PlanetDetails} from '../sw-component';

export default class PlanetsPage extends Component {

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
            left={<PlanetList onItemSelected={this.onItemSelected}/>}
            right={<PlanetDetails itemId={selectedItem}/>}/>
        )
    }
}