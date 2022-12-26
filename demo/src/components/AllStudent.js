import React, { useState, useEffect } from "react";
import Student from "./student";
import axios from "axios";
import base_url from "./../api/boot_api";
import { toast } from "react-toastify";

// This is our All student component
const AllStudent = () => {

    // Function to change the title
    useEffect(() => {
        document.title = "All Students";
    }, []);


    // Function to call server:
    const getAllStudentsFromServer = () => {
        
        // axios provides method to fire URL with the following suffix
        axios.get(`${base_url}/students`).then(
            (response) => {
                // For success
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

    // Calling function to fetch all Students
    useEffect(() => {
        getAllStudentsFromServer();
    }, []);


    // Setting data
    const [students, setStudents] = useState([
        // { name: "Madhav", course: "Java" }, { name: "Palak", course: "React" }
    ])

    // Updating records after Delete function
    const updateStudents = (id) => {
        setStudents(students.filter((s) => s.id != id));
    };

    // This is our all student component
    return (

        <div className="text-center">
            <h1>All Students</h1>

            <p>List of Students are below:</p>
            {/* Filtering for null records */}
            {
                // If the condition is true
                students.length > 0 ? 
                    // Then do this
                    students.map((item) =>
                        // Iterate with item.id     // Update performs update after delete function
                        <Student key={item.id} student={item} update={updateStudents} />)
                    // Else do this
                    : "No Students"
            }
        </div>
    )

}

export default AllStudent;