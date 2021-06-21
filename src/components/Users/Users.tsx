import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store";
import {followAC, getUsersTC, unfollowAC, UserType} from "../../state/usersReducer";
import s from './Users.module.css'
import userPhoto from '../../assets/user.png'

export const Users = () => {
    const [followValue, setFollowValue] = useState(false)
    const users = useSelector<AppRootStateType, Array<UserType>>(state => state.users.users)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsersTC())
    }, [])

    const follow = (userId: number) => {
        dispatch(followAC(userId))
        setFollowValue(true)
    }

    const unfollow = (userId: number) => {
        dispatch(unfollowAC(userId))
        setFollowValue(false)
    }

    return <div>
        {users.map(u =>  <div>
                <span>
                    <div className={s.photo}>
                        <img src={userPhoto} />
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => unfollow(u.id)}>Unfollow</button>
                            : <button onClick={() => follow(u.id)}>Follow</button>}
                    </div>
                </span>
            <span>
                <div>{u.name}</div>
            </span>
            </div>
        )}
    </div>
}