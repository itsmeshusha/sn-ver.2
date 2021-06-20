import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store";
import {followAC, unfollowAC, UserType} from "../../state/usersReducer";
import s from './Users.module.css'

export const Users = () => {
    const users = useSelector<AppRootStateType, Array<UserType>>(state => state.users.users)
    const dispatch = useDispatch()

    return <div>
        {users.map(u =>  <div key={u.id}>
                <span>
                    <div className={s.photo}>
                        <img src={u.photo} />
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => dispatch(unfollowAC(u.id))}>Unfollow</button>
                            : <button onClick={() => dispatch(followAC(u.id))}>Follow</button>}
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