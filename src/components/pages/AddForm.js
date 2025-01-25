import React from 'react';
import { observer, inject } from 'mobx-react';

import addForm from './AddValidation';

@inject('VehicleStore', 'AddViewStore')
@observer
class ListForm extends React.Component {

    render() {

        const { newModel, VehicleMake } = this.props.VehicleStore;

        const { add, handleChange } = this.props.AddViewStore;
  
      return (
        <form className="add__form" onSubmit={add}>

          <div className="add__form__select">
            <select {...addForm.$('makeId').bind()}
              value={newModel.makeId}
              onChange={event => handleChange(event)}
              required>
              <option disabled label="Select Vehicle Make"></option>
              {VehicleMake.map(make => <option key={Math.random()} value={make.id}>{make.makeName}</option>)}
            </select>
          </div>

          <div className="add__form__input">
            <input {...addForm.$('modelName').bind()}
              value={newModel.modelName}
              onChange={event => handleChange(event)}
              required
              minLength="5"
              maxLength="30"/>
          </div>

          <div className="add__form__input">
            <input {...addForm.$('modelAbrv').bind()}
              value={newModel.modelAbrv}
              onChange={event => handleChange(event)}
              required
              minLength="3"
              maxLength="3"/>
          </div>

          <button>Add Model</button>
          
        </form>
        );
    }
}
  
export default ListForm;
