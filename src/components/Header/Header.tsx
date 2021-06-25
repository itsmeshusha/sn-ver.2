import React, {useEffect} from "react";
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store";
import {getAuthUserDataTC} from "../../state/authReducer";

const Header = () => {
    const isAuth = useSelector<AppRootStateType, boolean>(state => state.auth.isAuth)
    const login = useSelector<AppRootStateType, string>(state => state.auth.login)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAuthUserDataTC())
    }, [])


    console.log(login)
    return <header className={s.header}>
        <img src={'https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg'} />
        <div className={s.loginBlock}>
            {isAuth ? login : <NavLink to={'login'}>Login</NavLink>}
        </div>
    </header>
}

export default Header;