import React, { Fragment, useEffect, useState } from "react";
import { Form, FormGroup, Label, Input, Container, Button } from "reactstrap"
import axios from "axios";
import base_url from "./api";
import { toast } from "react-toastify";

const AddEmployee = () => {

    // Setting title of page
    useEffect(() => {
        document.title = "Add Page : Employee"
    }, []);


    // Function to set Data in the employee
    const [employee, setEmployee] = useState({

    });

    // Handle Form function : Form --> Server
    const handleForm = (e) => {
        postDataToServer(employee);
        e.preventDefault();
    }

    // Function to post data on server
    const postDataToServer = (data) => {
        axios.post(`${base_url}/employees`, data).then(
            (response) => {
                toast.success("Data posted Successfully", { position: "bottom-center" });
            },
            (error) => {
                toast.error("Something went wrong", { position: "bottom-center" });
            }
        );
    };


    return <Fragment>
        <h1 className="text-center mt-3">Add Employee Form</h1>

        <Form onSubmit={handleForm} className="col-md-6 m-auto">
            <FormGroup>
                <Label>Name</Label>
                <Input
                    name="id"
                    placeholder="Enter Id"
                    type="number"
                    onChange={(e) => {
                        setEmployee({ ...employee, id: e.target.value });
                    }}
                />
            </FormGroup>
            <FormGroup>
                <Label>Name</Label>
                <Input
                    name="name"
                    placeholder="Enter Name"
                    type="text"
                    onChange={(e) => {
                        setEmployee({ ...employee, name: e.target.value });
                    }}
                />
            </FormGroup>
            <FormGroup>
                <Label>Designation</Label>
                <Input
                    name="designation"
                    placeholder="Enter Designation"
                    type="text"
                    onChange={(e) => {
                        setEmployee({ ...employee, designation: e.target.value });
                    }}
                />
            </FormGroup>
            <FormGroup>
                <Label>City</Label>
                <Input
                    name="city"
                    placeholder="Enter City"
                    type="text"
                    onChange={(e) => {
                        setEmployee({ ...employee, city: e.target.value });
                    }}
                />
            </FormGroup>
            <FormGroup>
                <Label>Salary</Label>
                <Input
                    name="salary"
                    placeholder="Enter Salary"
                    type="text"
                    onChange={(e) => {
                        setEmployee({ ...employee, salary: e.target.value });
                    }}
                />
            </FormGroup>

            <Container className="text-center">
                <Button type="submit" color="success mx-2">Add Employee</Button>
                <Button type="reset" color="danger mx-2">Reset</Button>
            </Container>

        </Form>

    </Fragment>
}


export default AddEmployee;