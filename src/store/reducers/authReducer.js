const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {
    switch(action.type){
        case 'LOGIN_ERROR':
            console.log(action.err)
            return {
                ...state,
                authError : action.err.message
            };
        
        case 'LOGIN_SUCCESS':
            console.log('login success')
            return {
                ...state,
                authError : null
            }

        case 'LOGOUT_SUCCESS':
            console.log('LOGOUT_SUCCESS')
            return state;
        default:
            return state;
    }
}

export default authReducer