import React from 'react';
import { observer, inject } from 'mobx-react';

import ListForm from './ListForm';
import ListPagination from './ListPagination';

@inject('VehicleStore', 'ListViewStore')
@observer
class ListComponent extends React.Component {

  render() {

    const { setListRendering } = this.props.ListViewStore;

    return (
      <main className="list">

        <ListForm className="list__form"/>

        <div className="list__container">

          <table className="table--filter">

            <thead>
              <tr>
                <th>Make Name</th>
                <th>Make Abrv</th>
                <th>Model Name</th>
                <th>Model Abrv</th>
              </tr>
            </thead>

            <tbody>
              {setListRendering}
            </tbody>
            
          </table>

        </div>

        <ListPagination />

      </main>
    );
  }
}

export default ListComponent;
