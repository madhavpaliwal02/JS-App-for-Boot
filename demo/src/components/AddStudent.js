import React, { Fragment, useEffect } from "react";
import { Form, FormGroup, Label, Input, Container, Button } from "reactstrap";

const AddStudent = () => {

    useEffect(() => {
        document.title = "Add Student";
    }, []);

    return <Fragment >
        <h1 className="text-center">Add Student Form</h1>
        <Form className="col-md-6 m-auto">
            <FormGroup>
                <Label for="id">
                    Id
                </Label>
                <Input
                    id="id"
                    name="id"
                    placeholder="Enter id"
                    type="text"
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
                />
            </FormGroup>

            <Container className="text-center">
                <Button color="success">Add Student</Button>
                <Button color="warning ml-2">Clear Form</Button>
            </Container>
        </Form>


    </Fragment>

};

export default AddStudent;