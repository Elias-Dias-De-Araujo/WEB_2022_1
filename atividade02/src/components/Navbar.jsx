import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Create_professor from "./Create_professor";
import List_professor from "./List_professor";
import Edit_professor from "./Edit_professor";

import Create_student from "./Create_student";
import List_student from "./List_student";
import Edit_student from "./Edit_student";

const NavBar = ()=> {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <Link to={"/"} className="navbar-brand" style={{ paddingLeft: 10 }}>
          Crud
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Student
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link to="/createStudent" className="dropdown-item">
                    Create Student
                  </Link>
                </li>
                <li>
                  <Link to="/listStudent" className="dropdown-item">
                    List Student
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Professor
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link to="/createProfessor" className="dropdown-item">
                    Create Professor
                  </Link>
                </li>
                <li>
                  <Link to="/listProfessor" className="dropdown-item">
                    List Professor
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>

      <Routes>
        <Route path="createStudent" element={<Create_student />} />
        <Route path="listStudent" element={<List_student />} />
        <Route path="editStudent/:id" element={<Edit_student />} />

        <Route path="createProfessor" element={<Create_professor />} />
        <Route path="listProfessor" element={<List_professor />} />
        <Route path="editProfessor/:id" element={<Edit_professor />} />
      </Routes>
    </div>
  );
}

export default NavBar