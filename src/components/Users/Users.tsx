import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store";
import {followAC, getUsersTC, unfollowAC, UserType} from "../../state/usersReducer";
import s from './Users.module.css'

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

    return <div>
        {users.map(u =>  <div key={u.id}>
                <span>
                    <div className={s.photo}>
                        <img src={u.photo} />
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => dispatch(unfollowAC(u.id))}>Unfollow</button>
                            : <button onClick={() => follow(u.id)}>Follow</button>}
                    </div>
                </span>
            <span>
                <div>{u.name}</div>
                <div>{u.city}</div>
            </span>
            </div>
        )}
    </div>
}