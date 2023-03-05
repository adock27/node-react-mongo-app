import React, {useState} from 'react'
import axios from 'axios';

const Login = () => {


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
            window.localStorage.setItem(
                'jwt', JSON.stringify(jwt)
            )
            setError(res.data.error);
        } catch (error) {
            console.log(error.response);
        }
    };
    



    return (
        <section className="container ">

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

export default Login