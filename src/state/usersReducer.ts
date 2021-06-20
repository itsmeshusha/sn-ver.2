type UserType = {
    id: number
    followed: boolean
    name: string
    city: string
}

type InitialStateType = {
    users: Array<UserType>
}

type ActionType = ReturnType<typeof followAC | typeof unfollowAC | typeof setUsersAC>

const InitialState: InitialStateType = {
    users: [
        {id: 1, followed: false, name: 'Sasha', city: 'Moscow'},
        {id: 1, followed: false, name: 'Alesya', city: 'St.Petersburg'},
        {id: 1, followed: false, name: 'Max', city: 'Novosibirsk'},
    ]
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
                        return {...u, followed: true}
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
                        return {...u, followed: false}
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