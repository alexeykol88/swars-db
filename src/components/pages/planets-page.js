import React from 'react';
import Row from '../row';
import {PlanetList, PlanetDetails} from '../sw-component';
import {withRouter} from 'react-router-dom';

const PlanetsPage = ({match, history}) => {
    const {id} = match.params;

        return (
            <Row
            left={<PlanetList onItemSelected={(id) => history.push(id)}/>}
            right={<PlanetDetails itemId={id}/>}/>
        )
}

export default withRouter(PlanetsPage);
