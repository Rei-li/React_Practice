import React, { PropTypes } from 'react';
import { Grid, Row, Col  } from 'react-bootstrap/lib/';

import drugUnitStore from '../../stores/drugUnitStore.js';
import LoadingSpinner from '../loadingSpinner/loadingSpinner.jsx'
import ListRow from '../list/__row/listRow.jsx'


// var t = Object.getOwnPropertyNames(this.props.drugUnit);
// var t1 = this.exclude.call(t);
// var t3 = this.getValuesToShow(t1);


const exclude = (obj, properties) => {

    let t = Object.getOwnPropertyNames(obj);
    let args = [...properties];
    let p = [...t];

    for (var i = 0; i < args.length; i++) {
        var index = p.indexOf(args[i]);
        if (index >= 0) {
            p.splice( index, 1 );
        }
    }
    return p;
};

const getValuesToShow = (props, obj) => {

    var values = [];

    for (var i = 0; i < props.length; i++) {
        values.push(obj[props[i]]);

    }

    // values.push(<Col  xs={2} >  </Col>);

    return values;
};

const renderDrugUnit = (drugUnit, key) => (

    // <DrugUnitListItem
    //     key={key}
    //     drugUnitId={drugUnit.DrugUnitId}
    //     pickNumber={drugUnit.PickNumber}
    //     drugTypeId={drugUnit.DrugTypeId}
    //     drugTypeName={drugUnit.DrugTypeName}
    //     depotId={drugUnit.DepotId}
    //     depotName={drugUnit.DepotName}
    // />
    <ListRow key={key} list = {getValuesToShow(exclude(drugUnit, ['$id', 'DrugTypeId', 'DepotId']), drugUnit)} />

);





class list extends React.Component
{
    constructor(props) {
        super(props);        
    }

    static exclude(obj, properties) {

        let t = Object.getOwnPropertyNames(obj);
        let args = [...properties];
        let p = [...t];

        for (var i = 0; i < args.length; i++) {
            var index = p.indexOf(args[i]);
            if (index >= 0) {
                p.splice( index, 1 );
            }
        }
        return p;
    }

    static getValuesToShow (props, obj){

        var values = [];

        for (var i = 0; i < props.length; i++) {
            values.push(obj[props[i]]);

        }

        // values.push(<Col  xs={2} >  </Col>);

        return values;
    };
    
}





export default list;