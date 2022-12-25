import React, { Component } from 'react';
import EmpService from '../service/EmpService';


// Creating react class as a component
class ViewEmp extends Component {

    // Constuctor that 
    constructor(props) {
        super(props)

        // setting state that assigns the data
        this.state = {
            employees: []
        }
    }

    // Method to call the api
    componentDidMount(){
        EmpService.getEmployees().then(
            (response)=>{
                this.setState({employees: response.data});
            }
        )
    }

    // Render method that returns to the App.js
    render() {
        return (
            <div>
                <h2 className='text-center'>Employees List</h2>

                <div className='row'>
                    <table className='table table-striped table-bordered'>

                        <thead>
                            <tr>
                                <th>Employee's Name</th>
                                <th>Employee's Designation</th>
                                <th>Employee's City</th>
                                <th>Employee's Salary</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                // Mapping the object to the table
                                this.state.employees.map(
                                    employee =>
                                        <tr key={employee.id} >
                                            <td>{employee.name}</td>
                                            <td>{employee.designation}</td>
                                            <td>{employee.city}</td>
                                            <td>{employee.salary}</td>
                                        </tr>
                                )

                            }
                        </tbody>

                    </table>

                </div>

            </div>
        );
    }
}

export default ViewEmp;