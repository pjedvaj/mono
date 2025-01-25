import { observable, action, computed } from 'mobx';
import React from 'react';

import VehicleStore from './VehicleStore';
import ListedItems from '../pages/ListedItems';

class ListViewStore {

  // Filter by model name
  @observable filterName = '';

  // Sort by make name
  @observable filterMake = '';

  // Sort by model name
  @observable filterSort = '';

  // Sets form input values to state
  @action handleChange = (event) => {
    const { name, value } = event.target;
    this[name] = value;
  }

  // Filters VehicleModel array by model name
  @computed get filteredVehicleModels() {
    let matchesFilter = new RegExp(`${this.filterName}`, 'i');
    return VehicleStore.VehicleModel.filter(model => !this.filterName || matchesFilter.test(model.modelName));
  }

  // Sorts VehicleModel array by make name
  @computed get filteredVehicleMake() {
    return VehicleStore.VehicleModel.filter(model => model.makeId == this.filterMake);
  }

  // Sorts VehicleModel array by model name
  @computed get sortedVehicleModelName() {
    return VehicleStore.VehicleModel.slice().sort((a, b) => (a.modelName > b.modelName ? 1 : -1 ))
  }

  // Sets the options for list rendering (filtering and sorting)
  @computed get setListRendering() {
    let list = VehicleStore.VehicleModel.map(model =>
        <ListedItems key={model.id} model={model}/>);
    if (this.filterName) {
      list = this.filteredVehicleModels.map(model =>
        <ListedItems key={model.id} model={model}/>);
    }
    if (this.filterMake) {
      list = this.filteredVehicleMake.map(model =>
        <ListedItems key={model.id} model={model}/>);
    }
    if (this.filterSort === 'model') {
      list = this.sortedVehicleModelName.map(model =>
        <ListedItems key={model.id} model={model}/>);
    }
    return list.slice((this.current -1) * this.pageSize, this.current * this.pageSize);
  }

  // Pagination current page
  @observable current = 1;

  // Pagination items per page
  @observable pageSize = 14;

  // Pagination page change
  @action onChange = (page) => {
      this.current = page;
  }

}

export default new ListViewStore();
