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
        {postsData.map(el => <Post id={el.id} message={el.message} likes={el.likes}/>)}

    </div>
}

export default MyPosts;