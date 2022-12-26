import React, { Component } from 'react';

class CreateEmp extends Component {

    // Constuctor that 
    constructor(props) {
        super(props)

        // setting state that assigns the data
        this.state = {
            name: '',
            designation: '',
            city: '',
            salary: ''
        }
    }

    changeName = (event) => {
        this.setState({ name: event.target.value });
    }
    changeDesignation = (event) => {
        this.setState({ designation: event.target.value });
    }
    changeCity = (event) => {
        this.setState({ city: event.target.value });
    }
    changeSalary = (event) => {
        this.setState({ salary: event.target.value });
    }


    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 '>
                            <h3 className='text-center'>
                                Add Employee
                            </h3>
                            <div className='card-body'>
                                <form>
                                    <div className='form-group'>
                                        <label>Employee's Name</label>
                                        <input placeholder='Enter Employees Name' className='form-control' name='name' value={this.state.name} onChange={this.changeName} />
                                    </div>
                                    <div className='form-group'>
                                        <label>Employee's Designation</label>
                                        <input placeholder='Enter Employees Designation' className='form-control' name='designation' value={this.state.designation} onChange={this.changeDesignation} />
                                    </div>
                                    <div className='form-group'>
                                        <label>Employee's City</label>
                                        <input placeholder='Enter Employees City' className='form-control' name='city' value={this.state.city} onChange={this.changeCity} />
                                    </div>
                                    <div className='form-group'>
                                        <label>Employee's Salary</label>
                                        <input placeholder='Enter Employees Salary' className='form-control' name='salary' value={this.state.salary} onChange={this.changeSalary} />
                                    </div>
                                    <div className='container'>
                                        <button className='btn btn-primary' type='submit'>Add Employee</button>
                                        <button className='btn btn-warning' type='reset'>Clear Form</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateEmp;