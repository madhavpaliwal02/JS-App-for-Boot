import React from "react";
import {
    Card, CardSubtitle, CardBody, CardText, Container, Button
} from "reactstrap";
import axios from 'axios';
import base_url from "../api/boot_api";
import { toast } from "react-toastify";

// This is our entity component of our application
const Student = ({ student, update }) => {

    // This code is for delete
    const deleteStudent = (id) => {

        // axios library provides delete function, with following url
        axios.delete(`${base_url}/students/${id}`).then(
            // It executes for true
            (response) => {
                toast.success("Successfully Deleted", { position: "bottom-center" });
                update(id);
            },
            // It executes for false
            (error) => {
                toast.error("Something went wrong", { position: "bottom-center" });
            }
        );
    };


    // This is our main entity component
    return (
        <Card className="text-center">
            <CardBody>
                <CardSubtitle className="font-weight-bold">{student.name}</CardSubtitle>
                <CardText>{student.course}</CardText>
                <Container className="text-center">
                    <Button color="warning mx-2" size="sm">Update</Button>
                    {/* Calling delete func here */}
                    <Button color="danger mx-2" size="sm" onClick={() => {
                        deleteStudent(student.id);
                    }}>Delete</Button>
                </Container>
            </CardBody>
        </Card>
    )
}


export default Student;