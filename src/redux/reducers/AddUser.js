import { ADD_USER } from "../actions";

const initialState = {
  user: null,
};

export default (state = initialState, actions) => {
  switch (actions.type) {
    case ADD_USER:
      return { ...state, user: actions.payload };
    default:
      return state;
  }
};