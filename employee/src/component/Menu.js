import React from "react";
import {ListGroup} from "reactstrap";
import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <ListGroup>
                <Link
                    className="list-group-item list-group-item-action"
                    to="/"
                    tag="a"
                >
                    Home
                </Link>
                <Link
                    className="list-group-item list-group-item-action"
                    to="/add-emp"
                    tag="a"
                >
                    Add Employee
                </Link>
                <Link
                    className="list-group-item list-group-item-action"
                    to="/view-emp"
                    tag="a"
                >
                    View Employee
                </Link>
            </ListGroup>
        </div>
    )
}

export default Menu;
