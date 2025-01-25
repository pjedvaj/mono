import React from 'react';
import { observer, inject } from 'mobx-react';

@inject('VehicleStore', 'GridViewStore')
@observer
class GridComponent extends React.Component {

  // FETCH DATA FROM API - PROOF OF CONCEPT

  // componentDidMount() {
  //   this.props.VehicleStore.fetchMakeData();
  //   this.props.VehicleStore.fetchModelData();
  // }

  render() {

    // Current date
    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();

    const { numOfVehicleModels } = this.props.GridViewStore;

    return (
      <main className="grid">

        <div className="grid__container">
          <div className="grid__mercedes"></div>
          <div className="grid__bmw"></div>
          <div className="grid__audi"></div>
        </div>

        <h2 className="grid__total">{`In stock on ${day}/${month}/${year} : ${numOfVehicleModels} vehicles`}</h2>

      </main>
    );
  }
}

export default GridComponent;
