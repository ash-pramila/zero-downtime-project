import { LOAD_EMPLOYEE_DATA } from '../constants/action'

let api_host=process.env.REACT_APP_API_HOST
let api_port=process.env.REACT_APP_API_PORT
//let res_url = "http://localhost:8000/api/employee/get/all"
let res_url = `http://${api_host}:${api_port}/api/employee/get/all`
let headers = new Headers();
headers.append('Content-Type', 'application/json');
headers.append('Accept', 'application/json');


export function getEmployeeData() {
  return function(dispatch) {
    return fetch(res_url, {headers: headers})
      .then(response => response.json())
      .then(json => {
        dispatch({ type: LOAD_EMPLOYEE_DATA, payload: json });
      });
  };
}
