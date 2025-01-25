import MobxReactForm from 'mobx-react-form';
import dvr from 'mobx-react-form/lib/validators/DVR';
import validatorjs from 'validatorjs';

// Validation Plugin

const plugins = {
  dvr: dvr(validatorjs)
}

// Fields

const fields = {
  makeId: {
    name: 'makeId',
    rules: 'required'
  },
  modelName: {
    name: 'modelName',
    placeholder: 'Type Model Name',
    rules: 'required|string|between:5,30'
  },
  modelAbrv: {
    name: 'modelAbrv',
    placeholder: 'Type Model Abrv',
    rules: 'required|string|size:3'
  }
}

// Validation Hooks

const hooks = {
  onSuccess(form) {
    // Log all field values
    console.log('Form Values!', form.values());
  },
  onError(form) {
    alert('Form has errors!');
    // Log all form errors
    console.log('All form errors', form.errors());
    form.invalidate('Generic error message!');
  }
}

export default new MobxReactForm({ fields }, { plugins, hooks });
