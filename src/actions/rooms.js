export function roomsHasErrored(bool) {
    return {
        type: "ROOMS_HAS_ERRORED",
        haErrored: bool
    }
}

export function roomsIsLoading(bool) {
    return {
        type: "ROOMS_IS_LOADING",
        sLoading: bool
    }
}

export function roomsFetchDataSuccess(rooms){
    return{
        type: "ROOMS_FETCH_DATA_SUCCESS",
        rooms
    }
}

export function roomsUpdated(bool) {
    return {
        type: "ROOMS_WAS_UPDATED",
        waUpdated: bool
    }
}

export function roomsFetchData(url){
    return (dispatch)=>{
        fetch(url)
            .then(response => {
                if(!response.ok){
                    throw new Error(response.statusText)
                }
                return response;
            })
            .then(response => response.json())
            .then(rooms => dispatch(roomsFetchDataSuccess(rooms)))
    }
}

export function roomsPushData(url, data) {
    return dispatch => {
        fetch(url, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(response => {
                dispatch(roomsUpdated(true));
                return response
            })
            .then(response => response.json())
            .then(rooms => console.log(rooms))
            .catch(()=>{})
    }
}

export function roomsUpdateData(url, data) {
    return dispatch => {
        fetch(url, {
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => {
                dispatch(roomsUpdated(true));
                return response
            })
            .then(response => response.json())
            .then(rooms => console.log(rooms))
            .catch(()=> {})
    }
}

export function roomsDeleteData(url) {
    return dispatch => {
        fetch(url, {
            method: "DELETE"
        })
            .then(response => {
                dispatch(roomsUpdated(true));
                return response
            })
            .then(response => response.json())
            .catch(()=> {console.log("Error with deleting")})
    }
}
