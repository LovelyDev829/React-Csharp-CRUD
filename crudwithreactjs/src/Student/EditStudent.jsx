import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import axios from "axios";
import "./Addstudent.css";

const EditStudentPage = () => {
  const [student, setStudent] = useState({
    Name: "",
    RollNo: "",
    Class: "",
    Address: "",
  });
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get("http://localhost:56720/Api/Student/StudentdetailById?id=" + id)
      .then((response) => {
        setStudent(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const handleChange = (e) => {
    console.log(e.target)
    setStudent({...student, [e.target.name]: e.target.value})
  }

  const onSubmit = (e) => {  
    e.preventDefault();  
    
    axios.post('http://localhost:56720/Api/Student/AddotrUpdatestudent/', {...student})  
        .then(res => console.log(res.data));  
        navigate('/Studentlist')  
  }  

  return (
    <Container className="App">
      <h4 className="PageHeading">Update Student Informations</h4>
      <Form className="form" onSubmit={onSubmit}>
        <Col>
          <FormGroup row>
            <Label for="name" sm={2}>
              Name
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                name="Name"
                value={student?.Name}
                onChange={handleChange}
                placeholder="Enter Name"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="Password" sm={2}>
              RollNo
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                name="RollNo"
                value={student?.RollNo}
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
                value={student?.Class}
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
                value={student?.Address}
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
              <Button type="submit" color="success">
                Submit
              </Button>{" "}
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
};

export default EditStudentPage;
