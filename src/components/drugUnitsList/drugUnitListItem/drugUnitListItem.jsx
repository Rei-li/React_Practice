import React, { PropTypes } from 'react';
import { Button  } from 'react-bootstrap/lib/';

import ListRow from '../../list/__row/listRow.jsx'

import '../../list/list.css'

const drugUnitListItem = (drugUnit, key) => (
    (function(drugUnit, key) {
        drugUnit.button = <Button className="btn-primary"> Edit Depot Association </Button>;
        return (
            <ListRow key={key}  item = {drugUnit} excludeProps = {['$id', 'DrugTypeId', 'DepotId']} />
        );
    })(drugUnit, key)
);

export default drugUnitListItem;