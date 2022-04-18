import React, { useState } from "react";
import { students } from "./data_student";

const Create_student = () => {
    const [name, setName] = useState("");
    const [course, setCourse] = useState("");
    const [ira, setIra] = useState(0);

    const handleSubmit = (event) => {
        event.preventDefault()
        const identifier = students.length;
        students.push(
            {
                id: identifier,
                name: name,
                course: course,
                ira: ira,
            }
        )
        
        students.map((student, i) => { 
            if(student.id == identifier) {
                student.name = name;
                student.course = course;
                student.ira = ira;
            }
        })
        alert("Estudante Criado com sucesso.");
    };

    return (
        <div>
        <h2 style={{textAlign: "center"}}>Create Student</h2>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
            <label>Name</label>
            <input
                type="text"
                className="form-control"
                value={name == null || name === undefined ? "" : name}
                name="name"
                onChange={(event) => setName(event.target.value)}
            />
            </div>
            <div className="form-group">
            <label>Course</label>
            <input
                type="text"
                className="form-control"
                value={course ?? ""}
                name="course"
                onChange={(event) => setCourse(event.target.value)}
            />
            </div>
            <div className="form-group">
            <label>IRA</label>
            <input
                type="text"
                className="form-control"
                value={ira ?? 0}
                name="ira"
                onChange={(event) => setIra(event.target.value)}
            />
            </div>
            <div
            className="form-group"
            style={{
                paddingTop: 10,
                display: "flex",
                justifyContent: "center",
            }}
            >
            <input
                type="submit"
                value="Create Student"
                className="btn btn-primary"
            />
            </div>
        </form>
        </div>
    );
};

export default Create_student;