
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

type ActionType = AddMessageActionType

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
const ADD_MESSAGE = 'ADD_MESSAGE'

export const dialogsReducer = (state: InitialStateType = InitialState, action: ActionType): InitialStateType => {
    switch(action.type) {
        case ADD_MESSAGE: {
            let message = {
                id: 4,
                message: action.newMessage
            }
            return {
                ...state,
                messagesData: [...state.messagesData, message]
            }
        }
        default:
            return state
    }
}
export const addMessageAC = (newMessage: string) => {
    return {
        type: ADD_MESSAGE,
        newMessage
    }
}

type AddMessageActionType = {
    type: 'ADD_MESSAGE'
    newMessage: string
}