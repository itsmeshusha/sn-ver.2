import React from "react";
import s from "./Post.module.css"

const Post = () => {
    return <div className={s.item}>
        <img src={'https://pyxis.nymag.com/v1/imgs/079/792/3ed0d94be0a9bd3d023f00532889bab152-30-chandler-bing.rsquare.w330.jpg'} />
        New post
    </div>
}

export default Post;