import {combineReducers, createStore} from "redux";
import {dialogsReducer} from "./dialogsReducer";
import {profileReducer} from "./profileReducer";


export type AppRootStateType = ReturnType<typeof reducers>

const reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,

})

export const store = createStore(reducers)
