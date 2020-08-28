import { ADD_NUM, ADD_SIGN, CLEAR_SIGNS, CLEAR_LAST, SET_RES, ADD_OPEN_BRACKET, ADD_CLOSE_BRACKET } from './types'

export const addNewNum = (e: any) => {
    return {
        type: ADD_NUM,
        sign: e.target.innerHTML
    }
}
export const addNewSign = (e: any)  => {
    return {
        type: ADD_SIGN,
        sign: e.target.innerHTML
    }
}
export const clearSigns = () => {
    return {
        type: CLEAR_SIGNS
    }
}
export const clearLast = () => {
    return {
        type: CLEAR_LAST
    }
}
export const setResult = (res: any) => {
    return {
        type: SET_RES,
        result: res
    }
}
export const addOpenBracket = () => {
    return {
        type: ADD_OPEN_BRACKET
    }
}
export const addCloseBracket = () => {
    return {
        type: ADD_CLOSE_BRACKET
    }
}