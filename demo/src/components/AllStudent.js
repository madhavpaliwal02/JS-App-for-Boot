import React, { useState } from "react";

import Student from "./student";


const AllStudent = () => {

    const [Students, setStudents] = useState([
        { title: "Java", description: "Object Oriented Language" }, { title: "C++", description: "Faster Execution as compared to Java" }, { title: "Spring Boot", description: "It is a framework of java which helps in rapid development of web application" }, { title: "Hibernate", description: "It is a framework of java which helps to deal with the database" }
    ])

    return (

        <div>
            <h1>All Students</h1>

            <p>List of Students are below:</p>

            {
                Students.length > 0 ? 
                Students.map((item) => 
                <Student Student={item} />) 
                : "No Students"
            }
        </div>
    )

}

export default AllStudent;