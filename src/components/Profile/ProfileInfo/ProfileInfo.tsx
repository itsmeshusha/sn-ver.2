import React from 'react';
import s from './ProfileInfo.module.css'
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../state/store";
import {ProfileType} from "../../../state/profileReducer";
import {ProfileStatus} from "./ProfileStatus/ProfileStatus";

const ProfileInfo = () => {
    const profile = useSelector<AppRootStateType, ProfileType>(state => state.profilePage.profile)

    return (
        <div>
            <img
                src={"https://img.freepik.com/free-vector/purple-3d-modern-background-design_53876-87399.jpg?size=626&ext=jpg&ga=GA1.2.1464808425.1601683200"}/>
            <div className={s.ava}>
                <img src={profile.photos.small} />
            </div>
            <ProfileStatus />
        </div>
    )
}

export default ProfileInfo;