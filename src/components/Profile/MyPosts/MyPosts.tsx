import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../state/store";
import {addPostAC, PostType} from "../../../state/profileReducer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";

type FormDataType = {
    newPost: string
}

const maxLength10 = maxLengthCreator(10)

const AddPostForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={'textarea'} name={'newPost'} placeholder={'Enter your text'} validate={[required, maxLength10]} />
            <div>
                <button>Add Post</button>
            </div>
        </form>
    )
}

const AddPostReduxForm = reduxForm<FormDataType>({form: 'addNewPost'})(AddPostForm)

const MyPosts = () => {
    const postsData = useSelector<AppRootStateType, Array<PostType>>(state => state.profilePage.postsData)
    const dispatch = useDispatch()

    const addNewPostSubmit = (values: FormDataType) => {
        dispatch(addPostAC(values.newPost))
    }

    return <div>
        <h1>My posts</h1>
        <AddPostReduxForm onSubmit={addNewPostSubmit} />
        {postsData.map(el => <Post message={el.message} likes={el.likes}/>)}

    </div>
}

export default MyPosts;