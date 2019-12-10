
import * as types from './actionTypes';

export function login(value){
    return {
        type: types.LOGIN_SUCCESS,
        value
    }
}
