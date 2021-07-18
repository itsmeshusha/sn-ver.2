import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getStatusTC} from "../../../../state/profileReducer";
import {useParams} from "react-router-dom";
import {ParamType} from "../../Profile";
import {AppRootStateType} from "../../../../state/store";

export const ProfileStatus = () => {
    const [, setStatus] = useState('fdfdfd')
    const [editMode, setEditMode] = useState(false)
    const status = useSelector<AppRootStateType, string>(state => state.profilePage.status)
    const {userId} = useParams<ParamType>()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getStatusTC(userId))
    }, [userId])

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
    }

    return (
        <div>
            {editMode
                ? <div>
                    <input autoFocus={true} value={status} onBlur={deactivateEditMode}/>
                </div>
                : <span onDoubleClick={activateEditMode}>{status}</span>}
        </div>
    )
}