import React, {ChangeEvent, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getStatusTC, updateStatusTC} from "../../../../state/profileReducer";
import {useParams} from "react-router-dom";
import {ParamType} from "../../Profile";
import {AppRootStateType} from "../../../../state/store";

export const ProfileStatus = () => {
    const status = useSelector<AppRootStateType, string>(state => state.profilePage.status)
    const [localStatus, setStatus] = useState(status)
    const [editMode, setEditMode] = useState(false)
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
        dispatch(updateStatusTC(localStatus))
    }
    const updateStatus = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {editMode
                ? <div>
                    <input autoFocus={true} value={localStatus} onBlur={deactivateEditMode} onChange={updateStatus}/>
                </div>
                : <span onDoubleClick={activateEditMode}>{status || "No  status"}</span>}
        </div>
    )
}