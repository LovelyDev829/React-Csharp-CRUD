import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import "./Addstudent.css";
import {
  Container,
  Col,
  Form,
  Row,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";

const AddStudentPage = () => {
  const [student, setStudent] = useState({})
  const navigate = useNavigate()

  const addStudent = () => {
    axios
      .post("http://localhost:56720/Api/Student/AddotrUpdatestudent/", {...student})
      .then((json) => {
        if (json.data.Status === "Success") {
          console.log(json.data.Status);
          alert("Data Save Successfully");
          navigate("/Studentlist");
        } else {
          alert("Data not Saved");
          navigate("/Studentlist");
        }
      });
  };

  const handleChange = (e) => {
    console.log(e.target)
    setStudent({...student, [e.target.name]: e.target.value})
  }

  return (
    <Container className="App">
      <h4 className="PageHeading">Enter Student Informations</h4>
      <Form className="form">
        <Col>
          <FormGroup row>
            <Label for="name" sm={2}>
              Name
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                name="Name"
                onChange={handleChange}
                placeholder="Enter Name"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="address" sm={2}>
              RollNo
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                name="RollNo"
                onChange={handleChange}
                placeholder="Enter RollNo"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="Password" sm={2}>
              Class
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                name="Class"
                onChange={handleChange}
                placeholder="Enter Class"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="Password" sm={2}>
              Address
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                name="Address"
                onChange={handleChange}
                placeholder="Enter Address"
              />
            </Col>
          </FormGroup>
        </Col>
        <Col>
          <FormGroup row>
            <Col sm={5}></Col>
            <Col sm={1}>
              <button
                type="button"
                onClick={addStudent}
                className="btn btn-success"
              >
                Submit
              </button>
            </Col>
            <Col sm={1}>
              <Button color="danger">Cancel</Button>{" "}
            </Col>
            <Col sm={5}></Col>
          </FormGroup>
        </Col>
      </Form>
    </Container>
  );
}

export default AddStudentPage 
