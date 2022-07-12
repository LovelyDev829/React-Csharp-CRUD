import React from 'react';  
import AddStudentPage from './Student/AddStudent';  
import StudentList from './Student/StudentList';  
import EditStudentPage from './Student/EditStudent';  
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';  
import './App.css';

function App() {  
  return (  
    <BrowserRouter>  
      <div className="container">  
        <nav className="navbar navbar-expand-lg navheader">  
          <div className="navbar-collapse" >  
            <ul className="navbar-nav mr-auto">  
              <li className="nav-item">  
                <Link to={'/Addstudent'} className="nav-link">Addstudent</Link>  
              </li>  
              <li className="nav-item">  
                <Link to={'/Studentlist'} className="nav-link">Student List</Link>  
              </li>  
            </ul>  
          </div>  
        </nav> <br />  
        <Routes>  
          <Route path='/' element={<AddStudentPage />} />  
          <Route path='/Addstudent' element={<AddStudentPage />} />  
          <Route path='/edit/:id' element={<EditStudentPage />} /> 
          <Route path='/Studentlist' element={<StudentList />} />  
        </Routes>  
      </div>  
    </BrowserRouter>  
  );  
}  

export default App;  