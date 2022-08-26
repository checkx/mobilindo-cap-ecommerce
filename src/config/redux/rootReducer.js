import { combineReducers } from 'redux';

import productOrderReducer from './reducer';

const rootReducer = combineReducers({
  productOrder: productOrderReducer
});

export default rootReducer;