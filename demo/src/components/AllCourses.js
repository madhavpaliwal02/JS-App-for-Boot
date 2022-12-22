import React, { useState } from "react";

import Course from "./course";


const AllCourse = () => {

    const [courses, setCourses] = useState([
        { title: "Java", description: "Object Oriented Language" }, { title: "C++", description: "Faster Execution as compared to Java" }, { title: "Spring Boot", description: "It is a framework of java which helps in rapid development of web application" }, { title: "Hibernate", description: "It is a framework of java which helps to deal with the database" }
    ])

    return (

        <div>
            <h1>All Courses</h1>

            <p>List of courses are below:</p>

            {
                courses.length > 0 ? 
                courses.map((item) => 
                <Course course={item} />) 
                : "No courses"
            }
        </div>
    )

}

export default AllCourse;