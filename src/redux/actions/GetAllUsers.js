const GET_ALL_USERS = 'GET_ALL_USERS';

const getAllUsers = (data) => {
    return {
        type: GET_ALL_USERS,
        data,
    };
};

const fetchGetAllUsers = () => async (dispatch) => {
    try {
        const url = `${process.env.REACT_APP_BACKEND_ENDPOINT}/api/customer/getall`;
        // const url = `${process.env.REACT_APP_API}/api/customer/getall`;
        const options = {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
            },
        };
        const response = await fetch(url, options);
        const result = await response.json();

        dispatch(getAllUsers(result));
    } catch (error) {
        console.log(error);
    }
};

export { getAllUsers, GET_ALL_USERS, fetchGetAllUsers };