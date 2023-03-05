import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'



import {
  Link,
} from "react-router-dom";

// boostrap 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export const EntityAdd = () => {

  const [entities, setEntities] = useState({
    name: "",
    description: ""
  })


  const navigate = useNavigate()


  const handleChange = (e) => {
    setEntities((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleClick = async e => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:4000/api/entities", entities)
      navigate('/')
    } catch (error) {
      console.log(error);
    }
  }



  return (
    <div className='container'>


      <Container>

        <Row>

         

          <Col>
            <h1 className='h5 mb-3'>Agregar entidad</h1>
            <form onSubmit={handleClick}>
              <div className="form-group">
                <label htmlFor="name" className='small'>Nombre de entidad:</label>
                <input
                  className='form-control mb-3'
                  type="text"
                  placeholder="..."
                  name="name"
                  onChange={handleChange}
                  value={entities.name}
                />
              </div>

              <label htmlFor="description" className='small'>Descripcion:</label>
              <textarea
                className='form-control mb-3'
                rows={5}
                type="text"
                placeholder="..."
                name="description"
                onChange={handleChange}
                value={entities.description}
              />

              <Link to="/"><button className='btn btn-outline-danger me-2'> Regresar </button></Link>
              <button className='btn btn-success' > Agregar </button>
            </form>


          </Col>


        </Row>
      </Container>





    </div>
  )
}


export default EntityAdd
