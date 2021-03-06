import Swal from 'sweetalert2';
const ADD_USER = 'ADD_USER';

const addUser = (payload) => {
    return { type: ADD_USER, payload };
};


const uploadUser = (formData, history) => async (dispatch) => {

    const url = `${process.env.REACT_APP_BACKEND_ENDPOINT}/api/customer`;
    // const url = `${process.env.REACT_APP_API}/api/customer`;
    const options = {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
            'Content-type': 'application/json',
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
    } else if (result.message ==="Phone Number is already registered")  {
        Swal.fire({
            title: 'Phone Number already registered',
            text: '',
            icon: 'error',
            // confirmButtonText: 'Cool',
        });
    }
    dispatch(addUser(result));
console.log(result)
};


export {
    ADD_USER,
    uploadUser,
    addUser,
};