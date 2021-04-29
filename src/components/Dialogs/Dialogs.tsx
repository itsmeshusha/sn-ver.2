import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem id={1} name={'Dima'}/>
                <DialogItem id={2} name={'Valera'}/>
                <DialogItem id={3} name={'Sveta'}/>
                <DialogItem id={4} name={'Victor'}/>
            </div>
            <div className={s.messages}>
                <Message message={'Hi!'}/>
                <Message message={'Im awesome!'}/>
                <Message message={'How are you?'}/>
            </div>
        </div>
    )
}

export default Dialogs;