import { Platform } from 'react-native';
import moment from 'moment';
import {
    OPEN_INDICATOR,
    DISMISS_INDICATOR,
    SET_USERINFO,
    CLEAR_USERINFO,
    LOGIN_TOKEN,
    DAYOFMONTH
} from '../utils/constants'
/**
 * 
 * Indicator controll
 */
export function indicatorControll(event) {
    return (dispatch) => {
        if (event) {
            dispatch(openIndicator())
        } else {
            dispatch(dismissIndicator())
        }
    }
}

export const openIndicator = (data) => ({
    type: OPEN_INDICATOR
})

export const dismissIndicator = (data) => ({
    type: DISMISS_INDICATOR
})
/**
 * END
 */

/**
 * 
 * Userinfo controll
 */
export function userinfoControll(event, data) {
    return (dispatch) => {
        if (event) {
            dispatch(setUserInfo(data))
        } else {
            dispatch(clearUserInfo())
        }
    }
}

export const setUserInfo = (data) => ({
    type: SET_USERINFO,
    payload: data
})

export const clearUserInfo = () => ({
    type: CLEAR_USERINFO
})

export function loginToken(data) {
    return (dispatch) => {
        dispatch(setLoginToken(data))
    }
}

export const setLoginToken = (data) => ({
    type: LOGIN_TOKEN,
    payload: data
})
/**
 * End
 */

/**
 * GET DATE OF MONTH
 */
export function GenerateDateMonth() {
    return (dispatch) => {
        let monthArr = [];
        let dayOfMonth = {};
        let days = moment().daysInMonth();
        for (let i = 1; i <= days; i++) {
            let today = moment().format("D");
            dayOfMonth = {
                dayId: i,
                dayNumber: i,
                dayActive: Number(today) == i ? true : false,
                // daySelected: Number(today) == i ? true : false
            };
            let mMonth = moment().format("MM");
            let yYear = moment().format("YYYY");

            let ddFormat = yYear + "/" + mMonth + "/" + i;
            let fullDate = moment(ddFormat, "YYYY/MM/DD").format(
                "YYYY-MM-DD HH:MM:ss"
            );

            dayOfMonth["dayName"] = moment(fullDate).format("ddd");
            monthArr.push(dayOfMonth);
        }
        dispatch(setDateMonth(monthArr))
    }
}

export const setDateMonth = (data) => ({
    type: DAYOFMONTH,
    payload: data
})

export const clearDateMonth = () => ({
    type: DAYOFMONTH,
    payload: []
})

/**
 * END
 */