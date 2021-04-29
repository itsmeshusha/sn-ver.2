import s from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

type PropsType = {
    id: number
    name: string
}

const DialogItem = (props: PropsType) => {
    return <div className={s.dialog}>
        <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
    </div>
}

export default DialogItem;