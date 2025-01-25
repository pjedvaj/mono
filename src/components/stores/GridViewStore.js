import { computed } from 'mobx';

import VehicleStore from './VehicleStore';

class GridViewStore {

    // Counts number of models in VehicleModel array
    @computed get numOfVehicleModels() {
        return VehicleStore.VehicleModel.length;
    }

}

export default new GridViewStore();
