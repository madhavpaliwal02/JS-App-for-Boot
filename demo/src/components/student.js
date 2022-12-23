import React from "react";
import {
    Card, CardTitle, CardSubtitle, CardBody, CardFooter, CardText, Container, Button
} from "reactstrap";


const Student = ({ student }) => {

    return (
        <Card className="text-center">
            <CardBody>
                <CardSubtitle className="font-weight-bold">{student.name}</CardSubtitle>
                <CardText>{student.course}</CardText>
                <Container className="text-center">
                    <Button color="warning mx-2" size="sm">Update</Button>
                    <Button color="danger mx-2"size="sm">Delete</Button>
                </Container>
            </CardBody>
        </Card>
    )
}


export default Student;