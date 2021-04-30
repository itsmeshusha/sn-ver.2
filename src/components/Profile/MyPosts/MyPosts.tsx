import React, {ChangeEvent, useState} from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../state/store";
import {addPostAC, PostType} from "../../../state/profileReducer";

const MyPosts = () => {
    const [value, setValue] = useState('')
    const postsData = useSelector<AppRootStateType, Array<PostType>>(state => state.profilePage.postsData)
    const dispatch = useDispatch()

    const addPost = () => {
        dispatch(addPostAC(value))
        setValue('')
    }
    const onPostChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.target.value)
    }

    return <div>
        My posts
        <div>
            <textarea value={value} onChange={onPostChangeHandler}/>
            <button onClick={addPost}>Add Post</button>
        </div>
        {postsData.map(el => <Post message={el.message} likes={el.likes}/>)}

    </div>
}

export default MyPosts;