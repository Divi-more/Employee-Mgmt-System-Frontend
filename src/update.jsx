
import { useState } from "react";

const API_URL = "https://emp-mgmt-divya.netlify.app";

const initialEmployee = {
  id: "",
  name: "",
  dept: "",
  post: "",
  mail: "",
  phone: "",
  salary: "",
  joining_date: "",
  address: "",
  gender: "",
  age: "",
  experience: "",
  employment_type: "",
  status: ""
};

function Update() {
  const [id, setId] = useState("");
  const [employee, setEmployee] = useState(initialEmployee);
  const [found, setFound] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API_URL}/getAll`);

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.detail || "Failed to fetch employees"
        );
      }

      const selectedEmployee = data.find(
        (emp) => Number(emp.id) === Number(id)
      );

      if (!selectedEmployee) {
        throw new Error("Employee not found");
      }

      setEmployee({
        ...initialEmployee,
        ...selectedEmployee,
        joining_date: selectedEmployee.joining_date
          ? String(selectedEmployee.joining_date).slice(0, 10)
          : ""
      });

      setFound(true);

    } catch (error) {
      console.error(error);
      alert(error.message);
      setFound(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setEmployee((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${API_URL}/edit/${employee.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            ...employee,
            id: Number(employee.id),
            salary: Number(employee.salary),
            age: Number(employee.age),
            experience: Number(employee.experience)
          })
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.detail || "Failed to update employee"
        );
      }

      alert("Employee updated successfully!");

      setFound(false);
      setId("");
      setEmployee(initialEmployee);

    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  return (
    <div className="container mt-4 mb-5">

      <h2 className="text-center mb-4">
        Update Employee
      </h2>

      {/* Search employee by ID */}
      <form onSubmit={handleSearch}>

        <div className="mb-3">

          <label className="form-label">
            Employee ID
          </label>

          <input
            type="number"
            className="form-control"
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="Enter Employee ID"
            required
          />

        </div>

        <button
          type="submit"
          className="btn btn-primary"
        >
          Search Employee
        </button>

      </form>

      {/* Employee update form */}
      {found && (

        <form
          onSubmit={handleUpdate}
          className="mt-4"
        >

          <div className="row">

            <div className="col-md-6 mb-3">
              <label className="form-label">
                Employee ID
              </label>

              <input
                type="number"
                className="form-control"
                name="id"
                value={employee.id}
                disabled
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={employee.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Department</label>
              <input
                type="text"
                className="form-control"
                name="dept"
                value={employee.dept}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Post</label>
              <input
                type="text"
                className="form-control"
                name="post"
                value={employee.post}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                name="mail"
                value={employee.mail}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Phone</label>
              <input
                type="tel"
                className="form-control"
                name="phone"
                value={employee.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Salary</label>
              <input
                type="number"
                className="form-control"
                name="salary"
                value={employee.salary}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Joining Date</label>
              <input
                type="date"
                className="form-control"
                name="joining_date"
                value={employee.joining_date}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-12 mb-3">
              <label className="form-label">Address</label>
              <textarea
                className="form-control"
                name="address"
                value={employee.address}
                onChange={handleChange}
                rows="3"
                required
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Gender</label>
              <select
                className="form-select"
                name="gender"
                value={employee.gender}
                onChange={handleChange}
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Age</label>
              <input
                type="number"
                className="form-control"
                name="age"
                value={employee.age}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">
                Experience (Years)
              </label>
              <input
                type="number"
                className="form-control"
                name="experience"
                value={employee.experience}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">
                Employment Type
              </label>
              <select
                className="form-select"
                name="employment_type"
                value={employee.employment_type}
                onChange={handleChange}
                required
              >
                <option value="">Select Type</option>
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
                <option value="Contract">Contract</option>
                <option value="Intern">Intern</option>
              </select>
            </div>

            <div className="col-md-6 mb-3">
              <label className="form-label">Status</label>
              <select
                className="form-select"
                name="status"
                value={employee.status}
                onChange={handleChange}
                required
              >
                <option value="">Select Status</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
                <option value="On Leave">On Leave</option>
              </select>
            </div>

          </div>

          <button
            type="submit"
            className="btn btn-success mt-3"
          >
            Update Employee
          </button>

        </form>

      )}

    </div>
  );
}

export default Update;