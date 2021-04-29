import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {AppRootStateType} from "../../state/store";
import {useSelector} from "react-redux";
import {DialogsType, MessagesType} from "../../state/dialogsReducer";


const Dialogs = () => {

    const dialogsData = useSelector<AppRootStateType, Array<DialogsType>>(state => state.dialogsPage.dialogsData)
    const messagesData = useSelector<AppRootStateType, Array<MessagesType>>(state => state.dialogsPage.messagesData)


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsData.map(el => <DialogItem id={el.id} name={el.name}/>)}
            </div>
            <div className={s.messages}>
                {messagesData.map(el => <Message id={el.id} message={el.message}/>)}
            </div>
        </div>
    )
}

export default Dialogs;