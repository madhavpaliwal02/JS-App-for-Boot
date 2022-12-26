import React, { Component } from 'react';
import CreateEmp from './CreateEmp';

class AddEmp extends Component {
    // Constuctor that 
    constructor(props) {
        super(props)

        // setting state that assigns the data
        this.state = {
        }
    }


    render() {
        return (
            <div>
                <CreateEmp />
            </div>
        );
    }
}

export default AddEmp;