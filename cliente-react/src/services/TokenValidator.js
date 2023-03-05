
export const tokenValidator = () => {

    const token = JSON.parse(window.localStorage.getItem('jwt'));
    if (token) {
        return { Authorization: `Bearer ${token}` }
    }
    return false
}

export const getToken = () => {

    const token = JSON.parse(window.localStorage.getItem('jwt'));

    if (token) {
        return true;
    } else {
        return false;
    }

}


export const removeToken = () => {

    window.localStorage.removeItem('jwt');

    window.location.reload(false);


}