import React from 'react';
import { observer, inject } from 'mobx-react';

import EditForm from './EditForm';

@inject('VehicleStore')
@observer
class EditComponent extends React.Component {

  render() {

    const { VehicleModel } = this.props.VehicleStore;

    return (
      <div className="edit">
        
        <h1>* select table cell to edit the content</h1>

        <div className="edit__container">

          <div className="edit__header">
            <span>Make Name</span>
            <span>Make Abrv</span>
            <span>Model Name</span>
            <span>Model Abrv</span>
          </div>

          <div className="edit__list">
            {VehicleModel.map(model =>
              <EditForm key={model.id} model={model} />)}
          </div>

        </div>

      </div>
    );
  }
}

export default EditComponent;
