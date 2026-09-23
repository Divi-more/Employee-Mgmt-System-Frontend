
import { useState } from "react";

function Delete() {

  const [id, setId] = useState("");

  const handleDelete = async (e) => {

    e.preventDefault();

    try {

      const response = await fetch(
        `https://employee-management-system-backend-ldjd.onrender.com/delete/${id}`,
        {
          method: "DELETE"
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.detail || "Failed to delete employee"
        );
      }

      alert("Employee deleted successfully!");

      setId("");

    } catch (error) {

      console.error(error);
      alert(error.message);

    }
  };

  return (
    <div className="container mt-4">

      <h2 className="text-center mb-4">
        Delete Employee
      </h2>

      <form onSubmit={handleDelete}>

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
          className="btn btn-danger"
        >
          Delete Employee
        </button>

      </form>

    </div>
  );
}

export default Delete;