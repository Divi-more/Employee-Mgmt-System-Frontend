
import { useEffect, useState } from "react";

const API_URL = "http://127.0.0.1:8000";

function Employees() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  const getEmployees = async () => {
    try {
      const response = await fetch(`${API_URL}/getAll`);

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.detail || "Failed to fetch employees"
        );
      }

      setEmployees(Array.isArray(data) ? data : []);

    } catch (error) {
      console.error(error);
      alert(error.message);

    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getEmployees();
  }, []);

  return (
    <div className="container mt-4 mb-5">

      <h2 className="text-center mb-4">
        All Employees
      </h2>

      <button
        className="btn btn-primary mb-3"
        onClick={getEmployees}
      >
        Refresh
      </button>

      {loading ? (
        <p>Loading employees...</p>
      ) : employees.length === 0 ? (
        <p>No employees found.</p>
      ) : (

        <div className="table-responsive">

          <table className="table table-bordered table-striped">

            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Department</th>
                <th>Post</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Salary</th>
                <th>Joining Date</th>
                <th>Address</th>
                <th>Gender</th>
                <th>Age</th>
                <th>Experience</th>
                <th>Employment Type</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {employees.map((emp) => (
                <tr key={emp.id}>

                  <td>{emp.id}</td>
                  <td>{emp.name}</td>
                  <td>{emp.dept}</td>
                  <td>{emp.post}</td>
                  <td>{emp.mail}</td>
                  <td>{emp.phone}</td>
                  <td>{emp.salary}</td>
                  <td>{emp.joining_date}</td>
                  <td>{emp.address}</td>
                  <td>{emp.gender}</td>
                  <td>{emp.age}</td>
                  <td>{emp.experience}</td>
                  <td>{emp.employment_type}</td>
                  <td>{emp.status}</td>

                </tr>
              ))}
            </tbody>

          </table>

        </div>
      )}

    </div>
  );
}

export default Employees;