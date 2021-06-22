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
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

type ActionType = ReturnType<typeof followAC | typeof unfollowAC | typeof setUsersAC | typeof setCurrentPageAC>

const InitialState: InitialStateType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 100,
    currentPage: 1
}

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'

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
                users: action.users
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }

        default:
            return state
    }

}

export const followAC = (userId: number) => ({type: FOLLOW, userId} as const)
export const unfollowAC = (userId: number) => ({type: UNFOLLOW, userId} as const)
export const setUsersAC = (users: Array<UserType>) => ({type: SET_USERS, users} as const)
export const setCurrentPageAC = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const)

export const getUsersTC = (currentPage: number, pageSize: number) => (dispatch: Dispatch) => {
    usersAPI.getUsers(currentPage, pageSize).then(res => {
        dispatch(setUsersAC(res.items))
        dispatch(setCurrentPageAC(currentPage))
    })
}


