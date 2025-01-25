import React from 'react';
import { observer, inject } from 'mobx-react';

import editForm from './EditValidation';

@inject('VehicleStore', 'EditViewStore')
@observer
class EditForm extends React.Component {

    // Sets changed value from Edit input to VehicleModel array
    handleChange = (event) => {
        const { name, value } = event.target;
        this.props.model[name] = value;
        if(name === "modelAbrv") {
            this.props.model[name] = value.toUpperCase();
        }
    }

    // Removes selected model from VehicleModel array
    delete = () => {
        this.props.VehicleStore.deleteModel(this.props.model);
    }

    render() {

        const { VehicleMake } = this.props.VehicleStore;

        const { model } = this.props;

        return (
            <form className="edit__items">

                <div className="edit__items__select">
                    <select className="edit__input"
                        {...editForm.$('editMakeName').bind()}
                        id={Math.random()}
                        value={model.makeId}
                        onChange={this.handleChange}
                        required>
                        {VehicleMake.map(make => <option key={make.id}
                                                         value={make.id}>
                                                         {make.makeName}
                                                </option>
                                        )
                        }
                    </select>
                </div>

                <div className="edit__items__select">
                    <select className="edit__input"
                        {...editForm.$('editMakeAbrv').bind()}
                        id={Math.random()}
                        value={model.makeId}
                        onChange={this.handleChange}
                        required>
                        {VehicleMake.map(make => <option key={make.id}
                                                         value={make.id}>
                                                         {make.makeAbrv}
                                                 </option>
                                        )
                        }
                    </select>
                </div>

                <div className="edit__input__style">
                    <input className="edit__input"
                        {...editForm.$('editModelName').bind()}
                        id={Math.random()}
                        value={model.modelName}
                        onChange={this.handleChange}
                        required
                        minLength="5"
                        maxLength="30"
                    />
                </div>

                <div className="edit__input__style">
                    <input className="edit__input__last"
                        {...editForm.$('editModelAbrv').bind()}
                        id={Math.random()}
                        value={model.modelAbrv}
                        onChange={this.handleChange}
                        required
                        minLength="3"
                        maxLength="3"
                    />
                </div>

                <span className="edit__delete"
                    id={Math.random()}
                    title="Delete Model"
                    onClick={this.delete}>&times;
                </span>

            </form>
        );
    }
}

export default EditForm;
