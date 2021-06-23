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
}
export type ActionsType = ReturnType<typeof addPostAC | typeof setUserProfileAC>

const InitialState: InitialStateType = {
    postsData: [
        {message: 'Как запустить проект? npm start?', likes: 10},
        {message: 'Я здесь новенький', likes: 23},
        {message: 'Привет! Как Дела?', likes: 30}
    ],
    newPostText: 'Hey hey!',
    profile: {
        userId: 2,
        photos: {
            small: "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
            large: "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"
        }
    },
}
const ADD_POST = 'ADD_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

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

export const getUserProfileTC = (userId: number) => (dispatch: Dispatch) => {
    return profileAPI.getProfile(userId).then(res => {
        dispatch(setUserProfileAC(res.data))
    })
}


type PhotosType = {
    small: string
    large: string
}
export type ProfileType = {
    userId: number
    photos: PhotosType
}
