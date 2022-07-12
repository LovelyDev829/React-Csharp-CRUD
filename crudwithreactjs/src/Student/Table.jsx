import React  from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import StudentList from "./StudentList";

const Table = (props) => {
  const navigate = useNavigate();

  const DeleteStudent = () => {
    axios
      .delete(
        "http://localhost:56720/Api/Student/Deletestudent?id=" + props.obj.Id
      )
      .then((json) => {
        if (json.data.Status === "Delete") {
          alert("Record deleted successfully!!");
        } else {
          alert("Somethinng went wrong");
        }
      })
      .then(() => {
        axios
          .get("http://localhost:56720/Api/Student/Studentdetails")
          .then(res => {
            <StudentList />
            // navigate("/Studentlist");
          })
          .catch(err => console.error(err));
      });
  };

  return (
    <tr>
      <td>{props.obj.Name}</td>
      <td>{props.obj.RollNo}</td>
      <td>{props.obj.Class}</td>
      <td>{props.obj.Address}</td>
      <td>
        <Link to={"/edit/" + props.obj.Id} className="btn btn-success">
          Edit
        </Link>
      </td>
      <td>
        <button
          type="button"
          onClick={DeleteStudent}
          className="btn btn-danger"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default Table;
