export function usersHasErrored(bool) {
    return {
        type: "USERS_HAS_ERRORED",
        hasErrored: bool
    }
}

export function usersIsLoading(bool) {
    return {
        type: "USERS_IS_LOADING",
        isLoading: bool
    }
}

export function usersFetchDataSuccess(users){
    return{
        type: "USERS_FETCH_DATA_SUCCESS",
        users
    }
}

export function usersUpdated(bool) {
    return {
        type: "USERS_WAS_UPDATED",
        wasUpdated: bool
    }
}

export function usersFetchData(url){
    return (dispatch)=>{
        fetch(url)
            .then(response => {
                if(!response.ok){
                    throw new Error(response.statusText)
                }
                return response;
            })
            .then(response => response.json())
            .then(users => dispatch(usersFetchDataSuccess(users)))
    }
}

export function usersPushData(url, data) {
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
                dispatch(usersUpdated(true));
                return response
            })
            .then(response => response.json())
            .then(users => console.log(users))
            .catch(()=>{})
    }
}

export function usersUpdateData(url, data) {
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
                dispatch(usersUpdated(true));
                return response
            })
            .then(response => response.json())
            .then(users => console.log(users))
            .catch(()=> {})
    }
}

export function usersDeleteData(url) {
    return dispatch => {
        fetch(url, {
            method: "DELETE"
        })
            .then(response => {
                dispatch(usersUpdated(true));
                return response
            })
            .then(response => response.json())
            .catch(()=> {console.log("Error with deleting")})
    }
}
