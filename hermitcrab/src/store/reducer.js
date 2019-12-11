import {combineReducers} from 'redux';
import {LOGIN_SUCCESS,CHANGE_DATA} from '../actions/actionTypes';


let userData={}
function login(state=userData,action){
    switch(action.type){
        case LOGIN_SUCCESS:
            console.log(action.value)
            userData=action.value
            return userData
        case CHANGE_DATA:
            console.log(action.value)
            userData=action.value
            return userData
        default:
            return state
        
    }
}

let reducer = combineReducers({
    login
})
export default reducer;