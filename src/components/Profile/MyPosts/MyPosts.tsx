import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = () => {
    return <div>
        My posts
        <div>
            <textarea/>
            <button>Add Post</button>
        </div>
        <Post/>
    </div>
}

export default MyPosts;