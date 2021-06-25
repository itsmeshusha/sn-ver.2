import {Dispatch} from "redux";
import {authAPI} from "../api/api";

type InitialStateType = {
    userId: string
    email: string
    login: string
    isAuth: boolean
}
type ActionType = ReturnType<typeof setUserDataAC>
let initialState = {
    userId: '',
    email: '',
    login: '',
    isAuth: false
};
const SET_USER_DATA = 'SET_USER_DATA'

export const authReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }
        default: return state
    }
}

export const setUserDataAC = (userId: string, email: string, login: string) => ({type: SET_USER_DATA, data: {userId, email, login}} as const)

export const getAuthUserDataTC = () => (dispatch: Dispatch) => {
    return authAPI.authMe().then(res => {
        if(res.data.resultCode === 0) {
            let {id, email, login} = res.data.data
            dispatch(setUserDataAC(id, email, login));
        }
    })
}