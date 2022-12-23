import React from "react";
import {
    Card, CardTitle, CardSubtitle, CardBody, CardFooter, CardText, Container, Button
} from "reactstrap";
import axios from 'axios';
import base_url from "../api/boot_api";
import { toast } from "react-toastify";


const Student = ({ student, update }) => {

    const deleteCourse = (id) => {
        axios.delete(`${base_url}/students/${id}`).then(
            (response) => {
                toast.success("Successfully Deleted", { position: "bottom-center" });
                update(id);
            },
            (error) => {
                toast.error("Something went wrong", { position: "bottom-center" });
            }
        );
    };

    return (
        <Card className="text-center">
            <CardBody>
                <CardSubtitle className="font-weight-bold">{student.name}</CardSubtitle>
                <CardText>{student.course}</CardText>
                <Container className="text-center">
                    <Button color="warning mx-2" size="sm">Update</Button>
                    <Button color="danger mx-2" size="sm" onClick={() => {
                        deleteCourse(student.id);
                    }}>Delete</Button>
                </Container>
            </CardBody>
        </Card>
    )
}


export default Student;