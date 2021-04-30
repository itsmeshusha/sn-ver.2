import React, {ChangeEvent, useState} from 'react'
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {AppRootStateType} from "../../state/store";
import {useDispatch, useSelector} from "react-redux";
import {addMessageAC, DialogsType, MessagesType} from "../../state/dialogsReducer";


const Dialogs = () => {
    const [value, setValue] = useState('')
    const dialogsData = useSelector<AppRootStateType, Array<DialogsType>>(state => state.dialogsPage.dialogsData)
    const messagesData = useSelector<AppRootStateType, Array<MessagesType>>(state => state.dialogsPage.messagesData)

    const dispatch = useDispatch()

    const sendMessage = () => {
        dispatch(addMessageAC(value))
        setValue('')
    }
    const onSendMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.target.value)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsData.map(el => <DialogItem id={el.id} name={el.name}/>)}
            </div>
            <div className={s.messages}>
                {messagesData.map(el => <Message id={el.id} message={el.message}/>)}
                <div>
                    <textarea value={value} onChange={onSendMessageHandler} />
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;