import React, { useState } from "react";
import { professors } from "./data_professor";

const Create_professor = () => {
    const [name, setName] = useState("");
    const [university, setUniversity] = useState("");
    const [degree, setDegree] = useState(0);

    const handleSubmit = (event) => {
        event.preventDefault()
        const identifier = professors.length;
        professors.push(
            {
                id: identifier,
                name: name,
                university: university,
                degree: degree,
            }
        )
        
        professors.map((professor, i) => { 
            if(professor.id == identifier) {
                professor.name = name;
                professor.university = university;
                professor.degree = degree;
            }
        })

        alert("Professor Criado com sucesso.");
    };

    return (
        <div>
        <h2 style={{ textAlign: "center" }}>Create Professor</h2>
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
            <label>University</label>
            <input
                type="text"
                className="form-control"
                value={university ?? ""}
                name="university"
                onChange={(event) => setUniversity(event.target.value)}
            />
            </div>
            <div className="form-group">
            <label>Degree</label>
            <input
                type="text"
                className="form-control"
                value={degree ?? ""}
                name="degree"
                onChange={(event) => setDegree(event.target.value)}
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
                value="Create Professor"
                className="btn btn-primary"
            />
            </div>
        </form>
        </div>
    );
};

export default Create_professor;