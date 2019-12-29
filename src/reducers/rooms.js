export function rooms(state = [], action){
    switch(action.type){
        case "ROOMS_FETCH_DATA_SUCCESS":
            return action.rooms
        default:
            return state;
    }
}

export function roomsUpdated(state = false, action) {
    switch (action.type) {
        case "ROOMS_WAS_UPDATED":
            return action.wasUpdated;
        default:
            return state;
    }
}
