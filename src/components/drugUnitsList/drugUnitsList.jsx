import React, { PropTypes } from 'react';
import DrugUnitListItem from './drugUnitListItem/drugUnitListItem.jsx';
import { Grid, Row, Col  } from 'react-bootstrap/lib/';

import drugUnitStore from '../../stores/drugUnitStore.js';
import LoadingSpinner from '../loadingSpinner/loadingSpinner.jsx'


const renderDrugUnit = (drugUnit, key) => (
    <DrugUnitListItem
        key={key}
        drugUnitId={drugUnit.DrugUnitId}
        pickNumber={drugUnit.PickNumber}
        drugTypeId={drugUnit.DrugTypeId}
        drugTypeName={drugUnit.DrugTypeName}
        depotId={drugUnit.DepotId}
        depotName={drugUnit.DepotName}
    />
);



class DrugUnitsList extends React.Component
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
        drugUnitStore.getAll().then(items =>
                self.setState({
                    list: items,
                    listLoaded: true
                }))
            .catch(err => {
                console.log(err);
                self.setState({
                    listLoaded: true
                })} )
    }


    render()
    {
        var self = this;
        return(
            <main className="container">
                <h2>Drug Units</h2>
                <Grid className="list">
                    <Row className="show-grid row list__row list__header-row">
                        <Col xs={2}> Drug Unit Id </Col>
                        <Col xs={2}> Pick Number </Col>
                        <Col xs={2}> Drug Type </Col>
                        <Col xs={2}> Depot Name </Col>
                        <Col xs={2}> </Col>
                    </Row>
                    {(function(listLoaded) {
                        if (listLoaded) {
                            return (
                                self.state.list.map((x, i) => renderDrugUnit(x, i))
                            );
                        }
                        else{
                            return (<LoadingSpinner/>);
                        }
                    })(self.state.listLoaded)}
                </Grid>
            </main>
        )
    }
}

export default DrugUnitsList;