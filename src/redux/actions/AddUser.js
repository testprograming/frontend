import Swal from 'sweetalert2';
// import jwt_decode from 'jwt-decode';

const ADD_USER = 'ADD_USER';

const addUser = (payload) => {
    return { type: ADD_USER, payload };
};


const uploadUser = (formData, history) => async (dispatch) => {
    // const token = JSON.parse(localStorage.getItem("token")).token; 
    // console.log(token);
    const url = `${process.env.REACT_APP_BACKEND_ENDPOINT}/api/customer`;
    // const url = `${process.env.REACT_APP_API}/api/customer`;
    const options = {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
            'Content-type': 'application/json',
            // authorization: `Bearer ${token}`,
        },
    };
    const response = await fetch(url, options);
    const result = await response.json();

    if (response.status === 200) {
        Swal.fire({
            title: 'Create User Succes!',
            text: '',
            icon: 'success',
            // confirmButtonText: 'Cool',
        });
        history.push('/');
    } else {
        Swal.fire({
            title: 'User already add',
            text: '',
            icon: 'error',
            // confirmButtonText: 'Cool',
        });
    }
    dispatch(addUser(result));

};


export {
    ADD_USER,
    uploadUser,
    addUser,
};