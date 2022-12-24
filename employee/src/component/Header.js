import React from "react";
import {Card, CardBody} from  "reactstrap";

const Header = () =>{
    return (
        <div>
            <Card className="my-2">
                <CardBody>
                    <h1 className="text-center mt-3">
                        Employee Application
                    </h1>
                </CardBody>
            </Card>
        </div>
    )
}


export default Header;