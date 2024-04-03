
import { combineReducers } from 'redux';

// reducer import
import customizationReducer from './customizationReducer ';

import getDashboardData from "./DashboardReducer";
const reducer = combineReducers({
  customization: customizationReducer,
  getDashboard : getDashboardData
});

export default reducer;
