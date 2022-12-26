import React from "react";
import { ListGroup } from "reactstrap";
import {Link} from "react-router-dom";

// This is left side : Menu component
const Menu = () => {

    return (
        <div>
            <ListGroup>
                <Link
                    className="list-group-item list-group-item-action active"
                    to="/"  // It defines the url to be fired with below text
                    tag="a"
                >
                    Home
                </Link>
                <Link
                    className="list-group-item list-group-item-action"
                    to="/add-student"
                    tag="a"
                >
                    Add Student
                </Link>
                <Link
                    className="list-group-item list-group-item-action"
                    to="/view-students"
                    tag="a"
                >
                    View Students
                </Link>
                <Link
                    className="list-group-item list-group-item-action"
                    to="#"
                    tag="a"
                >
                    Contacts
                </Link>
            </ListGroup>

        </div>
    );
}

export default Menu;