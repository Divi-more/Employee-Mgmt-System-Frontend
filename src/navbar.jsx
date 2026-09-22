import { Link } from "react-router-dom";

function NavBar(){
    return(
        <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "#0d6efd" }}
    >
      <div className="container-fluid">

        {/* Project Name */}
        <Link className="navbar-brand text-white" to="/">
          Employee Management System
        </Link>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-3">

            <li className="nav-item">
              <Link className="nav-link text-white" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white" to="/employees">
                Employees
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white" to="/register">
                Add Employee
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white" to="/update">
                Update Employee
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white" to="/delete">
                Delete Employee
              </Link>
            </li>

          </ul>
        </div>

      </div>
    </nav>
    )
}

export default NavBar