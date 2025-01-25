import { action } from 'mobx';

import VehicleStore from './VehicleStore';

class AddViewStore {
    
    // Set input value by name to state
    @action handleChange = (event) => {
        const { name, value } = event.target;
        VehicleStore.newModel[name] = value;
        if(name === "modelAbrv") {
            VehicleStore.newModel[name] = value.toUpperCase();
        }
    }

    // Prevents default submit behavior, invokes addModel function and resets the values
    @action add = (event) => {
        event.preventDefault();
        VehicleStore.addModel(VehicleStore.newModel);
        VehicleStore.newModel = {
            id: '',
            makeId: '',
            modelName: '',
            modelAbrv: ''
        };
    }

}

export default new AddViewStore();
