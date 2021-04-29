import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../redux/store";
import {PostType} from "../../../redux/profileReducer";

const MyPosts = () => {

    const postsData = useSelector<AppRootStateType, Array<PostType>>(state => state.profilePage.postsData)
    
    return <div>
        My posts
        <div>
            <textarea/>
            <button>Add Post</button>
        </div>
        {postsData.map(el => <Post id={el.id} message={el.message} likes={el.likes}/>)}

    </div>
}

export default MyPosts;