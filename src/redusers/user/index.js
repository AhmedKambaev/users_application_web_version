const initialState = {
    user: {
        name: '',
        password: '',
        authUser: false
    }
}


export default (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_USER': 
            return {
                ...state,
                user: {
                    login: action.payload.login,
                    authUser: true,
                    password: action.payload.password
                }
            }
        case 'USER_LOGOUT':
            action.payload.push('/');
            return {
                ...state,
                user: {
                    login: '',
                    password: ''
                }
            }
        default:
            return state;
    }
}