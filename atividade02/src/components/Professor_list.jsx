import React from "react";
import { Link } from "react-router-dom";

const Professor_list = (props) => {
  const { id, name, university, degree } = props.professor;
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{university}</td>
      <td>{degree}</td>
      <td>
        <Link to={`/editProfessor/${id}`} className="btn btn-warning">
          Edit
        </Link>
      </td>
    </tr>
  );
};
export default Professor_list;