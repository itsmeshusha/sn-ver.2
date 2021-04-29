import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = () => {

    let dialogsData = [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Valera'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Victor'},
    ]

    let messagesData = [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'Im awesome!'},
        {id: 3, message: 'How are you?'},
    ]

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