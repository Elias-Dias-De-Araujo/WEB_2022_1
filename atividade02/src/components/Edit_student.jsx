import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { students } from "./data_student";

const Edit_student = () => {
    const [name, setName] = useState("");
    const [course, setCourse] = useState("");
    const [ira, setIra] = useState(0);

    const params = useParams();

    useEffect(() => {
        const student = students[params.id];
        setName(student.name);
        setCourse(student.course);
        setIra(student.ira);
    }, [params.id]);

    const handleSubmit = (event) => {
        event.preventDefault()
        students.map((student, i) => { 
            if(student.id == params.id) {
                student.name = name;
                student.course = course;
                student.ira = ira;
            }
        })
        alert("Dados de estudante atualizados com sucesso.");
    };

    return (
        <div>
        <h2 style={{ textAlign: "center" }}>Edit Student</h2>
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
                value="Edit Student"
                className="btn btn-primary"
            />
            </div>
        </form>
        </div>
    );
};

export default Edit_student;