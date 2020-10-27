import {
    createStore,
    applyMiddleware,
    compose,
    combineReducers
} from 'redux';
import thunk from 'redux-thunk';
import EmployeeReducer from '../modules/employeeList/reducers/employeeReducer';

const rootReducer = combineReducers({
    employee: EmployeeReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore( rootReducer, composeEnhancers( applyMiddleware(thunk) ) );

export default store;
