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
  );
}

export default App;
