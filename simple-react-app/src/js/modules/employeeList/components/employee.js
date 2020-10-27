import React from "react";
import ReactDOM from "react-dom";
import { connect } from 'react-redux';
import { getEmployeeData } from '../actions/employeeActions';




class Employee extends React.Component{
    constructor(props) {
        super(props);
      }
    
      componentDidMount() {
        this.props.getEmployeeData();
      }

    render(){
      return(
        <div>
          <h1>Employee List</h1>
          <ul>
          {
              this.props.employees.map((item)=>(
                    <li>{item.name}</li>
              ))
          }
          </ul>
        </div>
      );
    }
}

const mapStateToProps = state => ({
    employees: state.employee.employees
});

export default connect(mapStateToProps, {getEmployeeData})(Employee);
