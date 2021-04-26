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
        <Post message={'Как запустить проект? npm start?'} likes={10} />
        <Post message={'Я здесь новенький'} likes={23} />
        <Post message={'Привет! Как Дела?'} likes={30} />
    </div>
}

export default MyPosts;