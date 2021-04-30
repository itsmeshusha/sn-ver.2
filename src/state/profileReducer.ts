export type PostType = {
    message: string
    likes: number
}
type InitialStateType = {
    postsData: Array<PostType>
    newPostText: string
}
export type ActionsType = AddPostActionType

const InitialState: InitialStateType = {
    postsData: [
        {message: 'Как запустить проект? npm start?', likes: 10},
        {message: 'Я здесь новенький', likes: 23},
        {message: 'Привет! Как Дела?', likes: 30}
    ],
    newPostText: 'Hey hey!'
}
const ADD_POST = 'ADD_POST'

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

type AddPostActionType = {
    type: 'ADD_POST'
    newPostText: string
}
