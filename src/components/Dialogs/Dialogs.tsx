import React, {ChangeEvent, useState} from 'react'
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {AppRootStateType} from "../../state/store";
import {useDispatch, useSelector} from "react-redux";
import {addMessageAC, DialogsType, MessagesType} from "../../state/dialogsReducer";
import {Redirect} from "react-router-dom";
import {Field, InjectedFormProps, reduxForm} from 'redux-form';

type FormDataType = {
    newMessageBody: string
}

const SendMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={'textarea'} name={'newMessageBody'} plsceholder={'Enter your text'} />
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const SendMessageReduxForm = reduxForm<FormDataType>({form: 'dialogsSendMessage'})(SendMessageForm)

const Dialogs = () => {
    const dialogsData = useSelector<AppRootStateType, Array<DialogsType>>(state => state.dialogsPage.dialogsData)
    const messagesData = useSelector<AppRootStateType, Array<MessagesType>>(state => state.dialogsPage.messagesData)
    const auth = useSelector<AppRootStateType, boolean>(state => state.auth.isAuth)

    const dispatch = useDispatch()

    const sendNewMessage = (values: FormDataType) => {
        dispatch(addMessageAC(values.newMessageBody))
    }

    if(!auth) {
        return <Redirect to={'/login'} />
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsData.map(el => <DialogItem id={el.id} name={el.name}/>)}
            </div>
            <div className={s.messages}>
                {messagesData.map(el => <Message id={el.id} message={el.message}/>)}
                <div>
                    <SendMessageReduxForm onSubmit={sendNewMessage} />
                </div>
            </div>
        </div>
    )
}

export default Dialogs;