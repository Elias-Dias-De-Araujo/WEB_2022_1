import React from "react";
import { students } from "./data_student";
import Student_list from "./Student_list";

const List_student = () => {
  function generateTable() {
    if (!students) return;
    return students.map((student, i) => {
      return <Student_list student={student} key={i} />;
    });
  }

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>List student</h2>
      <table className="table table-striped">
        <thead>
          <th>ID</th>
          <th>Name</th>
          <th>Course</th>
          <th>IRA</th>
          <th colSpan="2"></th>
        </thead>
        <tbody>{generateTable()}</tbody>
      </table>
    </div>
  );
};

export default List_student;