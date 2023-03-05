// import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';


import {
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";


import EntityPage from './components/entities/EntityPage';
import EntitiesPage from './components/entities/EntitiesPage';
import EntityAdd from './components/entities/EntityAdd';
import EmployeePage from './components/employees/EmployeePage';
import Register from './components/login/Register';
import Login from './components/login/Login';

axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light px-2 mb-3">
        <a className="navbar-brand" href="/">App</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item ">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="/add">Añadir entidad</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<EntitiesPage />} />
            <Route path='/:id' element={<EntityPage />} />
            <Route path='/:id/:id' element={<EmployeePage />} />
            <Route path='/add' element={<EntityAdd />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
