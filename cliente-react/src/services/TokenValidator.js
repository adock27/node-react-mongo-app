
export const tokenValidator = () =>{

    const token = JSON.parse(window.localStorage.getItem('jwt'));

    const config = { Authorization: `Bearer ${token}` }
    

    return config;
}

export const getToken = () =>{

    const token = JSON.parse(window.localStorage.getItem('jwt'));

    if (token) {
        return true;
    }else{
        return false;
    }

}