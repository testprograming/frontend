import { GET_ALL_USERS } from "../actions";

const initialState = [];

export default (state = initialState, actions) => {
    switch (actions.type) {
        case GET_ALL_USERS:
            return actions.data;

        default:
            return state;
    }
};
