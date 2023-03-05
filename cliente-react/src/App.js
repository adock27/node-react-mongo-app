// import logo from './logo.svg';
import './App.css';
import React from 'react';

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


function App() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light px-2 mb-5">
        <a class="navbar-brand" href="#">App</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item ">
              <a class="nav-link" href="/">Home</a>
            </li>
            <li class="nav-item ">
              <a class="nav-link" href="/add">Añadir entidad</a>
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
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
