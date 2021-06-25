import {applyMiddleware, combineReducers, createStore} from "redux";
import {dialogsReducer} from "./dialogsReducer";
import {profileReducer} from "./profileReducer";
import {usersReducer} from "./usersReducer";
import thunkMiddleware from 'redux-thunk';
import {authReducer} from "./authReducer";


export type AppRootStateType = ReturnType<typeof reducers>

const reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    users: usersReducer,
    auth: authReducer
})

export const store = createStore(reducers, applyMiddleware(thunkMiddleware))
