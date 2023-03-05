
export const tokenValidator = () =>{

    const token = JSON.parse(window.localStorage.getItem('jwt'));

    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    

    return config;
}