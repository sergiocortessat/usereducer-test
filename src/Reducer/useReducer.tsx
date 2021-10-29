export const loginReducer = (state:any, action:any) => {
    switch (action.type) {
        case 'LOGIN': {
            return {
                ...state,
                isLoading: true,
                error: ""
            }
        }
        case 'FIELD': {
            return {
                ...state,
                [action.field]: action.value
            }
        }
        case 'SUCCESS': {
            return {
                ...state,
                isLogin: true,
                username: "",
                password: "",
                error: ""
            }
        }
        case 'ERROR': {
            return {
                ...state,
                error: "Incorrect username or password",
                isLoading: false

            }
        }
        case 'LOGOUT': {
            return {
                ...state,
                isLogin: false,
                username: "",
                password: "",
                isLoading: false,
        }
        }

        default:
            break;
    }
    return state;

};

    export const initialState = {
        username: "",
        password: "",
        isLoading: false,
        error: "",
        isLogin: false,
    }

