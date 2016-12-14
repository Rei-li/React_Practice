import React, { PropTypes } from 'react';
import DepotListItem from './depotListItem.jsx';
import { Grid, Row, Col  } from 'react-bootstrap/lib/';
import { Link} from 'react-router'

import depotStore from '../../stores/depotStore.js';
import LoadingSpinner from '../loadingSpinner/loadingSpinner.jsx'


const renderDepot = (depot, key) => (
    <DepotListItem
        key={key}
        depotId={depot.DepotId}
        depotName={depot.DepotName}
        depotLocation={depot.DepotLocation}
        drugTypeName={depot.DrugTypeName}
        drugUnitId={depot.DrugUnitId}
        pickNumber={depot.PickNumber}
    />
);



class DepotsList extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            depotsList: [],
            depotsLoaded: false
        };
    }


    componentWillMount() {
        var self = this;
        depotStore.getAll().then(depots =>
                self.setState({
                    depotsList: depots,
                    depotsLoaded: true
                }))
            .catch(err => {
                console.log(err);
                self.setState({
                    depotsLoaded: true
                })} )
    }


    render()
    {
        var self = this;
        return(
            <main className="container">                
                <h2>Depots</h2>
                <Grid className="list">
                    <Row className="show-grid row list__row list__header-row">
                        <Col xs={2}> Depot Name </Col>
                        <Col xs={2}> Country Name </Col>
                        <Col xs={2}> Drug Type Name </Col>
                        <Col xs={2}> Drug Unit Id </Col>
                        <Col xs={2}> Pick Number </Col>
                    </Row>
                    {(function(depotsLoaded) {
                        if (depotsLoaded) {
                            return (

                                self.state.depotsList.map((x, i) => renderDepot(x, i))
                            );
                        }
                        else{
                            return (<LoadingSpinner/>

                            );
                        }
                    })(self.state.depotsLoaded)}

                </Grid>
            </main>
        )
    }
}

export default DepotsList;