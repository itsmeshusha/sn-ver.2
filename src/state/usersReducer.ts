import {Dispatch} from "redux";
import {usersAPI} from "../api/api";

export type UserType = {
    id: number;
    photos: {
        small: any
        large: any
    }
    name: string;
    status: string;
    location: {
        city: string;
        country: string;
    };
    isFollow: boolean;
}

type InitialStateType = {
    users: Array<UserType>
}

type ActionType = ReturnType<typeof followAC | typeof unfollowAC | typeof setUsersAC>

const InitialState: InitialStateType = {
    users: []

}

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

export const usersReducer = (state: InitialStateType = InitialState, action: ActionType): InitialStateType => {
    switch(action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId) {
                        return {...u, isFollow: true}
                    }
                    return u;
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId) {
                        return {...u, isFollow: false}
                    }
                    return u;
                })
            }
        }
        case SET_USERS: {
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        }

        default:
            return state
    }

}

export const followAC = (userId: number) => ({type: FOLLOW, userId} as const)
export const unfollowAC = (userId: number) => ({type: UNFOLLOW, userId} as const)
export const setUsersAC = (users: Array<UserType>) => ({type: SET_USERS, users} as const)

export const getUsersTC = () => (dispatch: Dispatch) => {
    usersAPI.getUsers().then(res => {
        dispatch(setUsersAC(res.items))
    })
}