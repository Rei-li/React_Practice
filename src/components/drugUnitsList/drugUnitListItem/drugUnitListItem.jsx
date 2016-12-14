import React, { PropTypes } from 'react';
import { Grid, Row, Col  } from 'react-bootstrap/lib/';

import '../../list/list.css'

const drugUnitListItem = ({ drugUnitId, pickNumber, drugTypeId, drugTypeName, depotId, depotName }) => (

    <Row className="show-grid row list__row">
        <Col xs={2} > {drugUnitId} </Col>
        <Col xs={2} > {pickNumber} </Col>
        <Col xs={2} > {drugTypeName} </Col>
        <Col xs={2} > {depotName} </Col>
        <Col xs={2} >  </Col>
    </Row>

);

drugUnitListItem.propTypes = {
    drugUnitId: PropTypes.number.isRequired,
    pickNumber: PropTypes.number.isRequired,
    drugTypeId: PropTypes.number.isRequired,
    drugTypeName: PropTypes.string.isRequired,
    depotId: PropTypes.number,
    depotName: PropTypes.string
};

export default drugUnitListItem;