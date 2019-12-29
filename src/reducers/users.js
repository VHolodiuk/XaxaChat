export function users(state = [], action){
    switch(action.type){
        case "USERS_FETCH_DATA_SUCCESS":
            return action.users
        default:
            return state;
    }
}

export function usersUpdated(state = false, action) {
    switch (action.type) {
        case "USERS_WAS_UPDATED":
            return action.wasUpdated;
        default:
            return state;
    }
}
