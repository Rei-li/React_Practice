import React, { PropTypes } from 'react';
import { Grid, Row, Col  } from 'react-bootstrap/lib/';

import '../list/list.css'

const depotListItem = ({ depotId, depotName, depotLocation, drugTypeName, drugUnitId, pickNumber }) => (
   
        <Row className="show-grid row list__row">           
            <Col xs={2} > {depotName} </Col>
            <Col xs={2} > {depotLocation} </Col>
            <Col xs={2} > {drugTypeName} </Col>
            <Col xs={2} > {drugUnitId} </Col>
            <Col xs={2} > {pickNumber} </Col>          
        </Row>
   
);

depotListItem.propTypes = {
    depotId: PropTypes.number.isRequired,
    depotName: PropTypes.string.isRequired,
    depotLocation: PropTypes.string.isRequired,
    drugTypeName: PropTypes.string,
    drugUnitId: PropTypes.number,
    pickNumber: PropTypes.number
};

export default depotListItem;