// import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import axios from 'axios'
import axios from 'axios';

import {
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import EntityPage from './components/entities/EntityPage';
import EntitiesPage from './components/entities/EntitiesPage';
import EntityAdd from './components/entities/EntityAdd';
import EmployeePage from './components/employees/EmployeePage';
import Login from './components/login/Login';
import { tokenValidator, getToken, removeToken } from './services/TokenValidator';

axios.defaults.headers.common = tokenValidator();

function App() {
  return (
    <>

      <Navbar bg="white" variant="light" className='mb-4 shadow'>
        <Container>
          <Navbar.Brand href="/">App</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Inicio</Nav.Link>
            {getToken() &&
              <Nav.Link href="/add">Nueva entidad</Nav.Link>
            }
          </Nav>
          {getToken() ?
            <Nav.Link onClick={removeToken}>Cerrar sesion</Nav.Link> :
            <Nav.Link href="/login">Iniciar sesion</Nav.Link>
          }
        </Container>
      </Navbar>


      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<EntitiesPage />} />
            <Route path='/:id' element={<EntityPage />} />
            <Route path='/:id/:id' element={<EmployeePage />} />
            <Route path='/add' element={<EntityAdd />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
