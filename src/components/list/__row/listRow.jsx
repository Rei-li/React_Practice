import React, { PropTypes } from 'react';
import { Grid, Row, Col  } from 'react-bootstrap/lib/';
import PropTypeHelper from '../../../helpers/propTypesHelper'


const exclude = (obj, properties) => {
    let objProps = [...Object.getOwnPropertyNames(obj)];

    for (var i = 0; i < properties.length; i++) {
        var index = objProps.indexOf(properties[i]);
        if (index >= 0) {
            objProps.splice( index, 1 );
        }
    }
    return objProps;
};

const getValuesToShow = (props, obj) => {
    var values = [];
    for (var i = 0; i < props.length; i++) {
        values.push(obj[props[i]]);
    }
    return values;
};

const renderListItemCol = (value, key) => (
    <Col key={key} xs={2} > {value} </Col>
);



class listRow extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            styleClass: `show-grid row list__row  ${props.styleClass}`,
            values : []
        };
    }

    componentWillMount() {
        var self = this;

        if(self.props.item){
            self.setState({
                values: getValuesToShow(
                    self.props.neededProps
                        ? self.props.neededProps
                        : exclude(
                        self.props.item,
                        self.props.excludeProps
                            ? [...self.props.excludeProps, '$id' ]
                            : ['$id']),
                    self.props.item
                )
            })
        }
        else if (self.props.valuesToShow){
            self.setState({
                values: self.props.valuesToShow
            })
        }
    }

    render()
    {
        var self = this;
        return(
            <Row  className = {self.state.styleClass} >
                {self.state.values.map((x, i) => renderListItemCol(x, i)) }
            </Row>
        )
    }
}

listRow.propTypes = {
    item: PropTypeHelper.requredIf('excludeProps').requredIf('neededProps').requredIfNot('valuesToShow').PropTypes.shape({
        DepotId: React.PropTypes.number,
        DepotName: React.PropTypes.string,
        DrugTypeId: React.PropTypes.number,
        DrugTypeName: React.PropTypes.string,
        DrugUnitId: React.PropTypes.number,
        PickNumber: React.PropTypes.number
    }),
    excludeProps: PropTypes.arrayOf(React.PropTypes.string),
    neededProps: PropTypes.arrayOf(React.PropTypes.string),
    valuesToShow: PropTypeHelper.requredIfNot('item').PropTypes.arrayOf(React.PropTypes.string)
};


export default listRow;