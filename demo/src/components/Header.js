import React from "react";
import { Card, CardBody } from "reactstrap";

function Header ({name, title}) {
    
// This is our Header Section
return(
    <div>
        <Card className="my-2">
            <CardBody>
                <h1 className="text-center my-2">Welcome to Student Application</h1>
            </CardBody>
        </Card>
    </div>
);

}

export default Header;