import React from "react";
import { professors } from "./data_professor";
import Professor_list from "./Professor_list";

const List_professor = () => {
  function generateTable() {
    if (!professors) return;
    return professors.map((professor, i) => {
      return <Professor_list professor={professor} key={i} />;
    });
  }

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>List Professor</h2>
      <table className="table table-striped">
        <thead>
          <th>ID</th>
          <th>Name</th>
          <th>University</th>
          <th>Degree</th>
          <th colSpan="2"></th>
        </thead>
        <tbody>{generateTable()}</tbody>
      </table>
    </div>
  );
};

export default List_professor;