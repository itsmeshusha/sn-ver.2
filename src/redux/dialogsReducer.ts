
export type DialogsType = {
    id: number
    name: string
}
export type MessagesType = {
    id: number
    message: string
}

type InitialStateType = {
    dialogsData: Array<DialogsType>
    messagesData: Array<MessagesType>
}

const InitialState: InitialStateType = {
    dialogsData: [
        { id: 1, name: 'Dima' },
        { id: 2, name: 'Valera' },
        { id: 3, name: 'Sveta' },
        { id: 4, name: 'Victor' },
    ],
    messagesData: [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'Im awesome!'},
        {id: 3, message: 'How are you?'},
    ]
}

export const dialogsReducer = (state: InitialStateType = InitialState) => {
    return state;
}