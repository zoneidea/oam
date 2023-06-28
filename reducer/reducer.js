import {
    OPEN_INDICATOR,
    DISMISS_INDICATOR,
    SER_USERINFO,
    CLEAR_USERINFO,
} from '../utils/constants'

const initialState = {
    indicator: false,
    userInfo: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case OPEN_INDICATOR:
            return {
                ...state,
                indicator: true
            }
        case DISMISS_INDICATOR:
            return {
                ...state,
                indicator: false
            }
        case SER_USERINFO:
            return {
                ...state,
                userInfo: action.payload
            }
        case CLEAR_USERINFO:
            return {
                ...state,
                userInfo: []
            }
        default:
            return state
    }
}