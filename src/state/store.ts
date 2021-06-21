import {applyMiddleware, combineReducers, createStore} from "redux";
import {dialogsReducer} from "./dialogsReducer";
import {profileReducer} from "./profileReducer";
import {usersReducer} from "./usersReducer";
import thunkMiddleware from 'redux-thunk';


export type AppRootStateType = ReturnType<typeof reducers>

const reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    users: usersReducer
})

export const store = createStore(reducers, applyMiddleware(thunkMiddleware))
