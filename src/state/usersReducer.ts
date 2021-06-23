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
    isLoading: boolean
}

type ActionType = ReturnType<typeof followAC | typeof unfollowAC | typeof setUsersAC | typeof setCurrentPageAC
    | typeof setTotalUserCountAC | typeof setIsLoadingAC>

const InitialState: InitialStateType = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isLoading: false
}

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT'
const SET_IS_LOADING = 'SET_IS_LOADING'

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
        case SET_TOTAL_USER_COUNT: {
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        }
        case SET_IS_LOADING: {
            return {
                ...state,
                isLoading: action.isLoading
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
export const setTotalUserCountAC = (totalCount: number) => ({type: SET_TOTAL_USER_COUNT, totalCount} as const)
export const setIsLoadingAC = (isLoading: boolean) => ({type: SET_IS_LOADING, isLoading} as const)

export const getUsersTC = (currentPage: number, pageSize: number) => (dispatch: Dispatch) => {
    dispatch(setIsLoadingAC(true))
    usersAPI.getUsers(currentPage, pageSize).then(res => {
        dispatch(setIsLoadingAC(false))
        dispatch(setUsersAC(res.items))
        dispatch(setCurrentPageAC(currentPage))
        dispatch(setTotalUserCountAC(res.totalCount))
    })
}


