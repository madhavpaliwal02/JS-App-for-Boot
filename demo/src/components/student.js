import React from "react";
import {
    Card, CardTitle, CardSubtitle, CardBody, CardFooter, CardText, Container, Button
} from "reactstrap";


const Student = ({ student }) => {

    return (
        <Card className="text-center">
            <CardBody>
                <CardSubtitle className="font-weight-bold">{student.title}</CardSubtitle>
                <CardText>{student.description}</CardText>
                <Container className="text-center">
                    <Button color="warning">Update</Button>
                    <Button color="danger">Delete</Button>
                </Container>
            </CardBody>
        </Card>
    )
}


export default Student;