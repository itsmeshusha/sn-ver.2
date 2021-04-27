import React from 'react'
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog}>
                    <NavLink to={'/dialogs/1'}>Dima</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={'/dialogs/2'}>Sveta</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={'/dialogs/3'}>Valera</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={'/dialogs/4'}>Victor</NavLink>
                </div>

            </div>
            <div className={s.messages}>
                <div className={s.message}>
                    Hi!
                </div>
                <div className={s.message}>
                    I'm awesome!
                </div>
                <div className={s.message}>
                    How are you?
                </div>

            </div>
        </div>
    )
}

export default Dialogs;