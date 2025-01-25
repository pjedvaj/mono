import React from 'react';
import { observer, inject } from 'mobx-react';

import AddForm from './AddForm';
import ListedItems from './ListedItems';

@inject('VehicleStore', 'AddViewStore')
@observer
class AddComponent extends React.Component {

  render() {

    const { VehicleModel } = this.props.VehicleStore;

    return (
      <main className="add">

        <AddForm />

        <div className="table__container">
          
          <table>

            <thead>
              <tr>
                <th>Make Name</th>
                <th>Make Abrv</th>
                <th>Model Name</th>
                <th>Model Abrv</th>
              </tr>
            </thead>

            <tbody>
              {VehicleModel.map(model =>
                <ListedItems key={model.id} model={model} />)}
            </tbody>
            
          </table>

        </div>

      </main>
      );
    }
  }

export default AddComponent;
