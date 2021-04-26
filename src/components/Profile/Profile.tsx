import React from "react";
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return <div className={s.content}>
        <img src={"https://img.freepik.com/free-vector/purple-3d-modern-background-design_53876-87399.jpg?size=626&ext=jpg&ga=GA1.2.1464808425.1601683200"} />
        <div>
            Main content
        </div>
        <div>
            ava+description
        </div>
        <MyPosts />
    </div>
}

export default Profile;
