import {
    combineReducers
} from "redux";

import GetAllUsers from "./GetAllUsers";
import AddUser from "./AddUser";
import EditUser from "./EditUser";

export default combineReducers({
    GetAllUsers,
    AddUser,
    EditUser,
});