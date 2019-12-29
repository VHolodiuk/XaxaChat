import {combineReducers} from 'redux';
import {users, usersUpdated} from "./users";
import {rooms, roomsUpdated} from "./rooms";

const rootReducer = combineReducers({
    users,
    usersUpdated,
    rooms,
    roomsUpdated
});

export default rootReducer;