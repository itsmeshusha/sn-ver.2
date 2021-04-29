export type PostType = {
    id: number
    message: string
    likes: number
}
type InitialStateType = {
    postsData: Array<PostType>
}

const InitialState: InitialStateType = {
    postsData: [
        {id: 1, message: 'Как запустить проект? npm start?', likes: 10},
        {id: 2, message: 'Я здесь новенький', likes: 23},
        {id: 3, message: 'Привет! Как Дела?', likes: 30}
    ]
}
export const profileReducer = (state: InitialStateType =InitialState) => {
    return state;
}