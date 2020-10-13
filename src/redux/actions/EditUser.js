import Swal from 'sweetalert2';
// import jwt_decode from 'jwt-decode';

const EDIT_USER= 'EDIT_USER';
const FIND_UPDATE = 'FIND_UPDATE';

const editUser = (payload) => {
    return { type: EDIT_USER, payload };
};
const findUpdate = (payload) => {
    return { type: FIND_UPDATE, payload };
};


const updateUser = (formData, history, id) => async (dispatch) => {
// const token = JSON.parse(localStorage.getItem("token")).token;
   try {
    for (let key in formData) {
        if (formData[key] === "") {
            delete formData[key];
        }
    }

    const options = {
        method: "PUT",
        headers: {
            "content-type": "application/json",
            // authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
    };
    // const url = `${process.env.REACT_APP_BACKEND_ENDPOINT}/api/movie/update/${id}`;
    const url = `${process.env.REACT_APP_API}/api/customer/update/${id}`;
    const response = await fetch(url, options);
    const result = await response.json();

    if (response.status === 200) {
        Swal.fire({
            icon: "success",
            title: "Your data is successfully updated",
        });

        history.push('/');
    } else {
        Swal.fire({
            icon: "error",
            title: result.message,
        });
    }
} catch (error) {
    console.log(error, 'error');
}
};


const findUser = (id) => async (dispatch) => {
    //    const token = localStorage.getItem("token");
        const url = `${process.env.REACT_APP_BACKEND_ENDPOINT}/api/customer/findbysearch/${id}`;
        // const url = `${process.env.REACT_APP_API}/api/customer/findbysearch/${id}`;
        const options = {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                // authorization: `Bearer ${token}`,
            },
        };
        const response = await fetch(url, options);
        const result = await response.json();
    
        dispatch(findUpdate(result));
    };


export {
    EDIT_USER,
    updateUser,
    editUser,
    findUpdate,
    findUser,
    FIND_UPDATE,
};