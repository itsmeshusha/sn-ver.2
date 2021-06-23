import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store";
import {followAC, getUsersTC, unfollowAC, UserType} from "../../state/usersReducer";
import s from './Users.module.css'
import userPhoto from '../../assets/user.png'
import {Loader} from "../../assets/Loader/Loader";

export const Users = () => {
    const [followValue, setFollowValue] = useState(false)
    const users = useSelector<AppRootStateType, Array<UserType>>(state => state.users.users)
    const pageSize = useSelector<AppRootStateType, number>(state => state.users.pageSize)
    const totalUsersCount = useSelector<AppRootStateType, number>(state => state.users.totalUsersCount)
    const currentPage = useSelector<AppRootStateType, number>(state => state.users.currentPage)
    const isLoading = useSelector<AppRootStateType, boolean>(state => state.users.isLoading)


    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsersTC(currentPage, pageSize))
    }, [currentPage])

    const follow = (userId: number) => {
        dispatch(followAC(userId))
        setFollowValue(true)
    }

    const unfollow = (userId: number) => {
        dispatch(unfollowAC(userId))
        setFollowValue(false)
    }

    const onPageChanged = (pageNumber: number) => {
        dispatch(getUsersTC(pageNumber, pageSize))
    }

    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []
    for (let i = 1; i<=pagesCount; i++) {
        pages.push(i)
    }


    return <div>
        {isLoading ? <Loader /> : null}
        <div>{pages.map(el => <span className={currentPage === el ? s.selectedPage : ""}
                                    onClick={() => onPageChanged(el)}>
            {el}
        </span>)}</div>
        {users.map(u =>  <div>
                <span>
                    <div className={s.photo}>
                        <img src={u.photos.small ? u.photos.small : userPhoto} />
                    </div>
                    <div>
                        {u.isFollow
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