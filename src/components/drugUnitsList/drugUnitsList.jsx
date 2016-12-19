import React, { PropTypes } from 'react';
import DrugUnitListItem from './drugUnitListItem/drugUnitListItem.jsx';
import { Grid, Row, Col  } from 'react-bootstrap/lib/';

import drugUnitStore from '../../stores/drugUnitStore.js';
import LoadingSpinner from '../loadingSpinner/loadingSpinner.jsx'
import ListRow from '../list/__row/listRow.jsx'
import DrugUnitDetails from '../drugUnitDetails/drugUnitDetails.jsx'

class DrugUnitsList extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            depotsList: [],
            depotsLoaded: false,
            selectedUnit: null,
            showUnitedit: false
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

    // changeUnitHandler(selectedUnit) {
    //     this.setState({
    //         selectedUnit: selectedUnit,
    //         showUnitedit: true
    //     });
    // }

    // changeUnitClosedHandler() {
    //     this.setState({
    //         selectedUnit: null,
    //         showUnitedit: false
    //     });
    // }


    render()
    {
        var self = this;
        return(
            <main className="container">
                <h2>Drug Units</h2>
                <Grid className="list">
                    <ListRow   valuesToShow = {['Drug Unit Id', 'Pick Number', 'Drug Type', 'Depot Name' ]} styleClass="list__header-row"/>

                    {(function(listLoaded) {
                        if (listLoaded) {
                            return (
                                self.state.list.map((x, i) => DrugUnitListItem(x, i))
                            );
                        }
                        else{
                            return (<LoadingSpinner/>);
                        }
                    })(self.state.listLoaded)}
                </Grid>
                {(function(ifShown, unitToEdit) {
                    if (ifShown) {
                        return (
                            <DrugUnitDetails drugUnit = {unitToEdit}  />
                        );
                    }
                })(self.state.showUnitedit, self.state.selectedUnit)}
            </main>
        )
    }
}

export default DrugUnitsList;
