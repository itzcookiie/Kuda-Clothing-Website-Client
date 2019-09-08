import { USER_INPUT} from './types'

const initialState = {
    user: {
        username: '',
        password: ''
    }
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case USER_INPUT:
            return { ...state, 
                user: {
                    ...state.user,
                    [action.dataField]: action.data
                } 
        }
        default:
            return state
    }
}