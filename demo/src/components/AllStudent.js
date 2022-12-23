import React, { useState, useEffect } from "react";
import Student from "./student";
import axios from "axios";
import base_url from "./../api/boot_api";
import { toast } from "react-toastify";

const AllStudent = () => {

    // Function to change the title
    useEffect(() => {
        document.title = "All Students";
    }, []);

    // Function to call server:
    const getAllCoursesFromServer = () => {
        axios.get(`${base_url}/students`).then(
            (response) => {
                // For success
                // console.log(response.data);
                toast.success("students have been loaded", { position: "bottom-center" });
                setStudents(response.data);
            },
            (error) => {
                // For error
                console.log(error);
                toast.error("something went wrong", { position: "bottom-center" });
            }
        );
    };

    // calling function
    useEffect(() => {
        getAllCoursesFromServer();
    }, []);


    // Manually adding fake data
    const [students, setStudents] = useState([
        // { name: "Madhav", course: "Java" }, { name: "Palak", course: "React" }
    ])

    // Delete Update function
    const updateStudents = (id) => {
        setStudents(students.filter((s) => s.id != id));
    };


    return (

        <div className="text-center">
            <h1>All Students</h1>

            <p>List of Students are below:</p>

            {
                students.length > 0 ?
                    students.map((item) =>
                        <Student key={item.id} student={item} update={updateStudents} />)
                    : "No Students"
            }
        </div>
    )

}

export default AllStudent;