import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { getToken } from '../../services/TokenValidator';
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();

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



            if (res.data.jwt) {
                const { jwt } = res.data;
                window.localStorage.setItem(
                    'jwt', JSON.stringify(jwt)
                )
                navigate('/')
            }



            setError(res.data.error);
        } catch (error) {
            console.log(error.response);
        }
    };



    useEffect(() => {

        if (getToken()) {
            navigate('/')
        }
    }, [])



    return (
        <section className="container ">

            {error && <p>{error}</p>}

            <form onSubmit={Auth}>
                <div className="form-group">
                    <label htmlFor="email" className='small'>Correo</label>
                    <input
                        className='form-control mb-3'
                        type="email"
                        placeholder="example@example.com"
                        name="email"
                        onChange={getFormValues}
                        value={login.email}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password" className='small'>Contraseña</label>
                    <input
                        className='form-control mb-3'
                        type="password"
                        placeholder="****"
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

export default Login