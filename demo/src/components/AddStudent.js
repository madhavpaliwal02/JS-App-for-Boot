import React, { Fragment, useEffect, useState } from "react";
import { Form, FormGroup, Label, Input, Container, Button } from "reactstrap";
import axios from 'axios';
import base_url from "../api/boot_api";
import { toast } from "react-toastify";

const AddStudent = () => {

    // Func to display title
    useEffect(() => {
        document.title = "Add Student";
    }, []);

    // Function to set Values in the student
    const [student, setStudent] = useState({

    });

    // Handle Form function
    const handleForm = (e) => {
        console.log("Data added", student);
        postDataToServer(student);
        e.preventDefault();
    }

    // Func to post data on server
    const postDataToServer = (data) => {
        axios.post(`${base_url}/students`, data).then(
            (response) => {
                console.log("Data posted", response.data);
                toast.success("Data added", { position: "bottom-center" });
            },
            (error) => {
                console.log(error);
                toast.error("Something went error", { position: "bottom-center" });
            }
        );
    };

    // Return function vendor
    return <Fragment >
        <h1 className="text-center mt-3">Add Student Form</h1>
        <Form onSubmit={handleForm} className="col-md-6 m-auto">
            <FormGroup>
                <Label for="id">
                    Id
                </Label>
                <Input
                    id="id"
                    name="id"
                    placeholder="Enter id"
                    type="text"
                    onChange={(e) => {
                        setStudent({ ...student, id: e.target.value });
                    }}
                />
            </FormGroup>
            <FormGroup>
                <Label for="Name">
                    Name
                </Label>
                <Input
                    id="Name"
                    name="nName"
                    placeholder="Enter Name"
                    type="text"
                    onChange={(e) => {
                        setStudent({ ...student, name: e.target.value });
                    }}
                />
            </FormGroup>
            <FormGroup>
                <Label for="Email">
                    Email
                </Label>
                <Input
                    id="Email"
                    name="email"
                    placeholder="Enter email"
                    type="email"
                    onChange={(e) => {
                        setStudent({ ...student, email: e.target.value });
                    }}
                />
            </FormGroup>
            <FormGroup>
                <Label for="Rollno">
                    Rollno
                </Label>
                <Input
                    id="Rollno"
                    name="rollno"
                    placeholder="Enter Rollno"
                    type="text"
                    onChange={(e) => {
                        setStudent({ ...student, rollno: e.target.value });
                    }}
                />
            </FormGroup>

            <Container className="text-center">
                <Button type="submit" color="success mx-2">Add Student</Button>
                <Button type="reset" color="warning mx-2">Clear Form</Button>
            </Container>
        </Form>


    </Fragment>

};

export default AddStudent;