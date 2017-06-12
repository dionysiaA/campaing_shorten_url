
/* Dependencies */
const {combineReducers} = require('redux');

/* Import Other Reducers */
import dressStore from './dressStore.js';


/* Combine & Export Reducers to Store */
const mainReducer = combineReducers({
  dressStore
});

module.exports = mainReducer;