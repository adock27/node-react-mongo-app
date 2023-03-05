import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Newlogin = () => {

    const [login, setLogin] = useState({
        email: "",
        password: "",
    })

    const [error, setError] = useState();


    //  obtiene los datos del formulario 
    const getFormValues = (e) => {
        setLogin((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }


    // cargar la data del la api 
    const Auth = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:4000/api/login", login)
            const {jwt} = res.data;
            console.log(jwt);
            window.localStorage.setItem(
                'jwt', JSON.stringify(jwt)
            )
            setError(res.data.error);
        } catch (error) {
            console.log(error.response);
        }
    };


    useEffect(() => {
      
        const jwt = window.localStorage.getItem('jwt');

        if (jwt) {
            console.log('hay una sesion'+ JSON.parse(jwt));
        }
      
    }, [])
    




    return (
        <section className="hero ">

            {error && <p>{error}</p>}

            <form onSubmit={Auth}>
                <div className="form-group">
                    <label htmlFor="email" className='small'>Nombre de empleado:</label>
                    <input
                        className='form-control mb-3'
                        type="email"
                        placeholder="..."
                        name="email"
                        onChange={getFormValues}
                        value={login.email}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password" className='small'>Nombre de empleado:</label>
                    <input
                        className='form-control mb-3'
                        type="password"
                        placeholder="..."
                        name="password"
                        onChange={getFormValues}
                        value={login.password}
                    />
                </div>
                <input
                    className='btn btn-success'
                    type="submit"
                    name="password"
                    value="Iniciar Sesion"
                />


            </form>

        </section>
    )
}

export default Newlogin