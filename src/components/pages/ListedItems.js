import React from 'react';
import { observer, inject } from 'mobx-react';

@inject('VehicleStore', 'ListViewStore')
@observer
class ListedItems extends React.Component {

    render() {

        const { VehicleMake } = this.props.VehicleStore;

        const { model } = this.props;

        return (
            <tr className="listed__items">

                <td>{`${(model.makeId == 1) ? (VehicleMake[model.makeId - 1].makeName)
                      : (model.makeId == 2) ? (VehicleMake[model.makeId - 1].makeName)
                      : (model.makeId == 3) ? (VehicleMake[model.makeId - 1].makeName)
                      : ''}`}
                </td>

                <td>{`${(model.makeId == 1) ? (VehicleMake[model.makeId - 1].makeAbrv)
                      : (model.makeId == 2) ? (VehicleMake[model.makeId - 1].makeAbrv)
                      : (model.makeId == 3) ? (VehicleMake[model.makeId - 1].makeAbrv)
                      : ''}`}
                </td>

                <td>{model.modelName}</td>

                <td>{model.modelAbrv}</td>
                
            </tr>
        );
    }
}

export default ListedItems;
