import React from 'react';
import { observer, inject } from 'mobx-react';

import listForm from './ListValidation';

@inject('VehicleStore', 'ListViewStore')
@observer
class ListForm extends React.Component {

  render() {

    const { VehicleMake } = this.props.VehicleStore;

    const { filterName, filterMake, filterSort, handleChange } = this.props.ListViewStore;

    return (
        <form className="list__form">

          <span>Filtering and sorting options</span>

          <div className="list__form__input">
            <input {...listForm.$('filterName').bind()}
              value={filterName}
              onChange={event => handleChange(event)}/>
          </div>

          <div className="list__form__select">
            <select {...listForm.$('filterMake').bind()}
              value={filterMake}
              onChange={event => handleChange(event)}>
              <option disabled label="Filter by Vehicle Make"></option>
              {VehicleMake.map(make => <option key={make.id} value={make.id}>{make.makeName}</option>)}
              <option value="">None</option>
            </select>
          </div>

          <div className="list__form__select">
            <select {...listForm.$('filterSort').bind()}
                value={filterSort}
                onChange={event => handleChange(event)}>
              <option disabled label="Sort by"></option>
              <option value="model">Model Name</option>
              <option value="">None</option>
            </select>
          </div>
          
        </form>
        );
    }
}
  
export default ListForm;
