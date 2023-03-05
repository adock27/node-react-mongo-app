import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


import { Link } from "react-router-dom";

// boostrap 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export const Add = () => {

  const [book, setBook] = useState({
    name: "",
    description: "",
    price: "",
    cover: ""
  })


  const navigate = useNavigate()


  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleClick = async e => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8800/books", book)
      navigate('/')
    } catch (error) {
      console.log(error);
    }
  }

  

  // console.log(book)

  return (
    <div className='container py-5 my-5'>


      <Container>
        <h1>Library</h1>
        <Row>

          <Col md={6} lg={4} xl={3}>
            <img className='img-fluid rounded-3' src={book.cover} alt="" />
            <h6>{book.name}</h6>
            <p className='small'>{book.description}</p>
            <span>${book.price}</span>
          </Col>


          <Col>

            <form>
              <div className="form-group">
                <input
                  className='form-control mb-3'
                  type="text"
                  placeholder="Book title"
                  name="name"
                  onChange={handleChange}
                  value={book.name}
                />
              </div>


            </form>


            <textarea
              className='form-control mb-3'
              rows={5}
              type="text"
              placeholder="Book desc"
              name="description"
              onChange={handleChange}
              value={book.description}
            />
            <input
              className='form-control mb-3'
              type="number"
              placeholder="Book price"
              name="price"
              onChange={handleChange}
              value={book.price}
            />
            <input
              className='form-control mb-3'
              type="text"
              placeholder="Book cover"
              name="cover"
              onChange={handleChange}
              value={book.cover}
            />
            <Link to="/"><button className='btn btn-outline-danger me-2'> Back</button></Link>
            <button className='btn btn-success' onClick={handleClick}>Add</button>
          </Col>


        </Row>
      </Container>



     
      
    </div>
  )
}
