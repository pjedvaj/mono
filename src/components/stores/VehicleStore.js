import { observable, action } from 'mobx';

class VehicleStore {

    // Array of vehicle makes (only 3 by default (Audi, BMW and Mercedes))
    @observable VehicleMake = require('../../common/data/VehicleMakeData.json');

    // Array of vehicle models (only 18 by default (6 of each vehicle make))
    @observable VehicleModel = require('../../common/data/VehicleModelData.json');

    // FETCH DATA FROM API - PROOF OF CONCEPT

    // Set state to initial data from JSON
    /* @action fetchMakeData = () => {
        this.VehicleMake = []
        fetch('../../common/data/VehicleMakeData.json')
        .then((res) => res.json())
        .then((data) => {
          this.VehicleMake = data
        }).catch((error) =>
        console.error('VehicleMakeData fetch failed'))
    } */

    // Set state to initial data from JSON
    /* @action fetchModelData = () => {
        this.VehicleModel = []
        fetch('../../common/data/VehicleModelData.json')
        .then((res) => res.json())
        .then((data) => {
          this.VehicleMake = data
        }).catch((error) =>
        console.error('VehicleModelData fetch failed'))
    } */

    // New model object
    @observable newModel = {
        id: '',
        makeId: '',
        modelName: '',
        modelAbrv: ''
    }

    // Adds new model to VehicleModel array and generates an id
    @action addModel = (model) => {
        model.id = this.VehicleModel.length === 0 ? 1
        : Math.max(...this.VehicleModel.map(i => i.id)) + 1;
        this.VehicleModel.push(model);
    }

    // Removes selected model from VehicleModel array
    @action deleteModel = (model) => {
        this.VehicleModel.remove(model);
    }

}

export default new VehicleStore();
