import React, { useEffect, useState } from "react";
import axios from "axios";
import Employee from "./Employee";
import { toast } from "react-toastify";
import base_url from "./api";

// This is our All employee component
const ViewEmployee = ({ employee }) => {

    // Setting Title : run on every call
    useEffect(() => {
        document.title = "View Page : Employee"
    }, []);

    // Function to call server:
    const getAllEmpFromServer = () => {
        axios.get(`${base_url}/employees`).then(
            (response) => {
                toast.success("employees data have been loaded", { position: "bottom-center" });
                setEmployees(response.data);
            },
            (error) => {
                toast.success("something went wrong", { position: "bottom-center" });
            }
        );
    };

    // Calling function to fetch all employees
    useEffect(() => {
        getAllEmpFromServer();
    }, []);

    // Add fuction
    const [employees, setEmployees] = useState([

    ]);

    // Updating records after Delete function
    const updateEmployees = (id) => {
        setEmployees(employees.filter((e) => e.id != id));
    };

    // View Emp return fuction
    return (
        <div>
            <h1>Employee Details</h1>
            <p>List of employees are below:</p>
            {/* Filtering for null records */}
            {
                // If the condition is true
                employees.length > 0 ?
                    // Then do this
                    employees.map((item) =>
                        // Iterate with item.id    // Update performs update after delete function
                        <Employee key={item.id} employee={item} updateD={updateEmployees} />)
                    // Else do this
                    : "No Employee"
            }

        </div>
    )
}


export default ViewEmployee;