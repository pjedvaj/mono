import MobxReactForm from 'mobx-react-form';
import dvr from 'mobx-react-form/lib/validators/DVR';
import validatorjs from 'validatorjs';

// Validation Plugin

const plugins = {
  dvr: dvr(validatorjs)
}

// Fields

const fields = {
  filterName: {
    name: 'filterName',
    placeholder: 'Filter by Model Name'
  },
  filterMake: {
    name: 'filterMake'
  },
  filterSort: {
    name: 'filterSort'
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
