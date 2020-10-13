import { EDIT_USER, FIND_UPDATE } from "../actions";

const initialState = {
  user: null,
};

export default (state = initialState, actions) => {
  switch (actions.type) {
    case EDIT_USER:
      return { ...state, user: actions.payload };
      case FIND_UPDATE:
        return { ...state, user: actions.payload };
      default:
      return state;
  }
};