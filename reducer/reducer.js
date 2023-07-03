import {
    OPEN_INDICATOR,
    DISMISS_INDICATOR,
    SET_USERINFO,
    CLEAR_USERINFO,
    LOGIN_TOKEN,
    DAYOFMONTH
} from '../utils/constants'

const initialState = {
    indicator: false,
    userInfo: [],
    loginToken: '',
    dayMonth: []
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
        case SET_USERINFO:
            return {
                ...state,
                userInfo: action.payload
            }
        case CLEAR_USERINFO:
            return {
                ...state,
                userInfo: []
            }
        case LOGIN_TOKEN:
            return {
                ...state,
                loginToken: action.payload
            }
        case DAYOFMONTH:
            return {
                ...state,
                dayMonth: action.payload
            }
        default:
            return state
    }
}