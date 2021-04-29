import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = () => {

    let postsData = [
        {id: 1, message: 'Как запустить проект? npm start?', likes: 10},
        {id: 2, message: 'Я здесь новенький', likes: 23},
        {id: 3, message: 'Привет! Как Дела?', likes: 30}
    ]

    return <div>
        My posts
        <div>
            <textarea/>
            <button>Add Post</button>
        </div>
        <Post id={postsData[0].id} message={postsData[0].message} likes={postsData[0].likes} />
        <Post id={postsData[1].id} message={postsData[1].message} likes={postsData[1].likes} />
        <Post id={postsData[2].id} message={postsData[2].message} likes={postsData[2].likes} />

    </div>
}

export default MyPosts;