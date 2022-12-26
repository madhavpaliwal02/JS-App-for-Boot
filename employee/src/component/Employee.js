import React, { useState, useEffect } from "react";
import { ListGroup, Card, CardBody, CardText, CardSubtitle, Container, Button } from "reactstrap";
import axios from "axios";
import base_url from "./api";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import UpdateEmployee from "./UpdateEmp";

// This is our entity component of our application
const Employee = ({ employee, updateD }) => {
    const [emp ,setEmp] = useState([]);


    // This code is for delete : onclick
    const deleteEmployee = (id) => {
        // axios library provides delete function, with following url
        axios.delete(`${base_url}/employees/${id}`).then(
            // It executes for true
            (response) => {
                toast.success("Successfullt deleted", { position: "bottom-center" });
                updateD(id);
            },
            // It executes for false
            (error) => {
                toast.error("Something went wrong", { position: "bottom-center" });
            }
        );
    };

        // This code is for update : onclick
    const updateEmployee = (id) => {
        // axios library provides update function, with following url
        axios.get(`${base_url}/employees/${id}`).then(
            // When true
            (response) => {
                // toast.success("Updated Successfully", { position: "bottom-center" });

                console.log("hello", response.data);
                setEmp([response.data]);
                
            },
            // When false
            (error) => {
                toast.error("Something went wrong", { position: "bottom-center" });
            }
        )
        return (
            <UpdateEmployee item={emp} />
        )
    }
    // Setting data
   

    // This is our return func of entity component
    return (
        <Card className="text-center">
            <CardBody>
                <CardSubtitle className="font-weight-bold">{employee.name}</CardSubtitle>
                <CardText>{employee.designation}</CardText>
                <CardText>{employee.city}</CardText>
                <CardText>{employee.salary}</CardText>
                <Container>
                    <ListGroup>
                        <Link
                            className="btn btn-warning btn-sm m-auto"
                            to="/update-emp"
                            tag="a"
                            onClick={() => {
                                updateEmployee(employee.id);
                            }
                            }
                        >
                            Update
                        </Link>
                    </ListGroup>

                    {/* Calling update func here */}
                    {/* <Button color="warning mx-2" size="sm" onClick={() => {
                        updateEmployee(employee.id);
                    }}>Update</Button> */}

                    {/* Calling delete func here */}
                    <Button onClick={() => {
                        deleteEmployee(employee.id);
                    }} color="danger mx-2" size="sm">Delete</Button>
                </Container>
            </CardBody>
        </Card>
    )
}

export default Employee;