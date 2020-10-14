import Swal from 'sweetalert2';
import { getAllUsers } from './GetAllUsers';
// import jwt_decode from 'jwt-decode';

const DELETE_USER = 'DELETE_USER';

const delUser = (payload) => {
    return { type: DELETE_USER, payload };
};


const deleteUser = (id) => async (dispatch) => {
    try {
    const url = `${process.env.REACT_APP_BACKEND_ENDPOINT}/api/customer/delete/${id}`;
    // const url = `${process.env.REACT_APP_API}/api/customer/delete/${id}`;
    const options = {
        method: 'DELETE',
        body: JSON.stringify(),
        headers: {
            'Content-type': 'application/json',

        },
    };
    const response = await fetch(url, options);
    const result = await response.json();

    if (response.status === 200) {
        Swal.fire({
            title: 'delete succes!',
            text: '',
            icon: 'success',

        });
        dispatch(getAllUsers());
        // history.push('/');
    } else {
        Swal.fire({
            icon: "error",
            title: result.message,
        });
    }
} catch (error) {
    console.log(error);
}
    
};


export {
    DELETE_USER,
    deleteUser,
    delUser,
};