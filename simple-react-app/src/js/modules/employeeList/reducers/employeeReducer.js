import { LOAD_EMPLOYEE_DATA } from '../constants/action'
//import data from '../data/empData.json'

const initialState = {
    employees: []
};

function employeeReducer(state = initialState, action){
    switch(action.type){
        case LOAD_EMPLOYEE_DATA:
            return Object.assign({}, state, {
                employees: state.employees.concat(action.payload)
              });
        default:
            return state;
    }
}

export default employeeReducer;
