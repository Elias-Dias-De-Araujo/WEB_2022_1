import React from "react";
import { Link } from "react-router-dom";

const Student_list = (props) => {
  const { id, name, course, ira } = props.student;
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{course}</td>
      <td>{ira}</td>
      <td>
        <Link to={`/editStudent/${id}`} className="btn btn-warning">
          Edit
        </Link>
      </td>
    </tr>
  );
};
export default Student_list;