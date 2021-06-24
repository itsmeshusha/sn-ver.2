import React, {useEffect} from "react";
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {useDispatch, useSelector} from "react-redux";
import {getUserProfileTC, ProfileType} from "../../state/profileReducer";
import {AppRootStateType} from "../../state/store";
import {useParams} from "react-router-dom";

type ParamType = {
    userId: string
}

const Profile = () => {
    const dispatch = useDispatch()
    const {userId} = useParams<ParamType>()


    useEffect(() => {
        dispatch(getUserProfileTC(userId))
    }, [userId])

    return <div className={s.content}>
        <ProfileInfo />
        <MyPosts />
    </div>
}

export default Profile;
