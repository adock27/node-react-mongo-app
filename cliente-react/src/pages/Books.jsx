import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

// boostrap 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Hero from './Hero';

import {
    Link,
} from "react-router-dom";

const Books = () => {

    const [books, setBooks] = useState({
        data: [],
        loading: true
    });


    useEffect(() => {
        const fetchAllBooks = async () => {
            try {
                const res = await axios.get("http://localhost:8800/books");
                setBooks(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchAllBooks();
    }, []);




    const deleteBook = async (id) => {
        try {
            await axios.delete("http://localhost:8800/books/" + id);
            window.location.reload()
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div>
            <Container>
                <Hero></Hero>

                <Link to='/add'>
                    <button className='btn btn-primary '>
                        Add new book
                    </button>
                </Link>



                <Row className='p-4 pb-0 pe-lg-0 pt-lg-5'>

                    {( books.loading) ? (
                        <p>Loading...</p>
                    ) : (books.map((book) => (
                        <Col className='col-12' md={4} lg={2} xl={2} key={book.id}>
                            <Link
                                to={`/update/${book.id}`}
                                style={{ color: "inherit", textDecoration: "none" }}
                            >
                                <div key={book.id} className="book">
                                    <img className='img-fluid rounded-3' src={book.cover} alt="" />

                                    <div className='px-1 py-2'>
                                        <h6>{book.name}</h6>
                                        <span className='small'>${book.price}</span>
                                    </div>
                                </div>
                            </Link>
                        </Col>
                    )))}
                </Row>
            </Container>



        </div>
    )
}

export default Books