import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { professors } from "./data_professor";

const Edit_professor = () => {
    const [name, setName] = useState("");
    const [university, setUniversity] = useState("");
    const [degree, setDegree] = useState("");

    const params = useParams();

    useEffect(() => {
        const professor = professors[params.id];
        setName(professor.name);
        setUniversity(professor.university);
        setDegree(professor.degree);
    }, [params.id]);

    const handleSubmit = (event) => {
        event.preventDefault()
        professors.map((professor, i) => { 
            if(professor.id == params.id) {
                professor.name = name
                professor.university = university
                professor.degree = degree
            }
        })
        alert("Dados de professor atualizados com sucesso.");
    };

    return (
        <div>
        <h2 style={{ textAlign: "center" }}>Edit professor</h2>
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
                value="Edit professor"
                className="btn btn-primary"
            />
            </div>
        </form>
        </div>
    );
};

export default Edit_professor;