import React, {useEffect} from "react";
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {useDispatch, useSelector} from "react-redux";
import {getUserProfileTC, ProfileType} from "../../state/profileReducer";
import {AppRootStateType} from "../../state/store";

const Profile = () => {
    const dispatch = useDispatch()
    const profile = useSelector<AppRootStateType, ProfileType>(state => state.profilePage.profile)

    useEffect(() => {
        dispatch(getUserProfileTC(profile.userId))
    }, [])

    return <div className={s.content}>
        <ProfileInfo />
        <MyPosts />
    </div>
}

export default Profile;
