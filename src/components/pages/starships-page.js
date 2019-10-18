import React from 'react';
import Row from '../row';
import {StarshipList, StarshipDetails} from '../sw-component';
import {withRouter} from 'react-router-dom';

const StarshipsPage = ({history, match}) => {
    const {id} = match.params;

        return (
            <Row
            left={<StarshipList onItemSelected={(id) => history.push(id)}/>}
            right={<StarshipDetails itemId={id}/>}/>
        )
}

export default withRouter(StarshipsPage);
