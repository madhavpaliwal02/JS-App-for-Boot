import React, { useEffect } from "react";
import { Container, Button } from "reactstrap";

const Home = (props) => {

    useEffect(() => {
        document.title = "Home Page : Employee"
    }, []);

    return (
        <div className="p-5 mb-4 bg-light rounded-3">
            <Container className="container-fluid">
                <h1 className="display-5 fw-bold">Home Page</h1>
                <p className="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking</p>
                <Button color="primary">ReactButton</Button>
            </Container>
        </div>
    );
}


export default Home;