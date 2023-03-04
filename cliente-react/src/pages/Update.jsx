import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

// boostrap 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export const Update = () => {


  // state de mi objeto 
  const [book, setBook] = useState({
    name: "",
    description: "",
    price: "",
    cover: ""
  })




  // state de mi error 
  const [error, setError] = useState(false)

  // control de la navegacion 
  const navigate = useNavigate()

  // para obtener el id del param url 
  const location = useLocation()

  // obtengo el param id 
  const bookId = location.pathname.split("/")[2];

  //  obtiene los datos del formulario 
  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:8800/books/${bookId}`, book);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };


  const deleteBook = async (id) => {
    try {
      await axios.delete("http://localhost:8800/books/" + id);
      navigate('/')
    } catch (error) {
      console.log(error);
    }
  }



  useEffect(() => {

    const fecthBookById = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/books/${bookId}`);
        setBook(res.data[0])
      } catch (error) {
        console.log(error);
      }
    }

    fecthBookById()
  }, [])


  return (
    <div className='container py-5 my-5'>

      <Row>
        <h1>Edit Book</h1>
        <Col md={3}>

          <img className='img-fluid rounded-3' src={book.cover} alt="" />
          <h6>{book.name}</h6>
          <p className='small'>{book.description}</p>
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




          </form>



          <Link to="/"><button className='btn rounded-pill btn-secondary me-2'> Back</button></Link>
          <button className="btn rounded-pill btn-outline-danger  me-2" onClick={() => deleteBook(book.id)}>Delete</button>
          <button className='btn rounded-pill btn-success' onClick={handleClick}>Update</button>
          {error && "Something went wrong!"}
        </Col>
      </Row>




    </div>
  )
}
