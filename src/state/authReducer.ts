type InitialStateType = {
    userId: string
    email: string
    login: string
}
type ActionType = ReturnType<typeof setUserDataAC>
let initialState = {
    userId: '',
    email: '',
    login: ''
};
const SET_USER_DATA = 'SET_USER_DATA'

export const authReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data
            }
        }
        default: return state
    }
}

export const setUserDataAC = (userId: string, email: string, login: string) => ({type: SET_USER_DATA, data: {userId, email, login}} as const)