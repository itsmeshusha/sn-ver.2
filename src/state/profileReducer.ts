import {Dispatch} from "redux";
import {profileAPI} from "../api/api";

export type PostType = {
    message: string
    likes: number
}
type InitialStateType = {
    postsData: Array<PostType>
    newPostText: string
    profile: ProfileType
    status: string
}

type PhotosType = {
    small: string
    large: string
}
export type ProfileType = {
    userId: string
    photos: PhotosType
}
export type ActionsType = ReturnType<typeof addPostAC | typeof setUserProfileAC | typeof getStatusAC>

const InitialState: InitialStateType = {
    postsData: [
        {message: 'Как запустить проект? npm start?', likes: 10},
        {message: 'Я здесь новенький', likes: 23},
        {message: 'Привет! Как Дела?', likes: 30}
    ],
    newPostText: 'Hey hey!',
    profile: {
        userId: '2',
        photos: {
            // small: "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
            small: "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
            large: ""
        }
    },
    status: ''
}
const ADD_POST = 'ADD_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const GET_STATUS = 'GET_STATUS'

export const profileReducer = (state: InitialStateType =InitialState, action: ActionsType): InitialStateType => {
    switch(action.type) {
        case (ADD_POST): {
            let newPost = {
                message: action.newPostText,
                likes: 1
            }
            return {
                ...state,
                postsData: [newPost, ...state.postsData]
            }
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case GET_STATUS: {
            return {...state, status: action.status}
        }

        default:
            return state;
    }
}

export const addPostAC = (newPostText: string) => {
    return {
        type: ADD_POST,
        newPostText
    } as const
}
export const setUserProfileAC = (profile: ProfileType) => ({type: SET_USER_PROFILE, profile} as const)
export const getStatusAC = (status: string) => ({type: GET_STATUS, status} as const)

export const getUserProfileTC = (userId: string) => (dispatch: Dispatch) => {
    return profileAPI.getProfile(userId).then(res => {
        dispatch(setUserProfileAC(res.data))
    })
}
export const getStatusTC = (userId: string) => (dispatch: Dispatch) => {
    return profileAPI.getStatus(userId).then(res => {
        dispatch(getStatusAC(res.data))
    })
}
export const updateStatusTC = (status: string) => (dispatch: Dispatch) => {
    return profileAPI.updateStatus(status).then(res => {
        if(res.data.resultCode === 0) {
            dispatch(getStatusAC(status))
        }
    })
}