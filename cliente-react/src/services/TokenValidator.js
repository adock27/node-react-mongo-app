
export const tokenValidator = () =>{

    const token = JSON.parse(window.localStorage.getItem('jwt'));

    const config = { Authorization: `Bearer ${token}` }
    

    return config;
}