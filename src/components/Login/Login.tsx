import React from 'react';
import  { reduxForm, InjectedFormProps, Field } from "redux-form";
import {Input} from "../../assets/FormControls/FormControl";
import {required} from "../../utils/validators/validators";

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'login'} name={'login'} component={Input} validate={[required]} />
            </div>
            <div>
                <Field placeholder={'password'} name={'password'} component={Input} validate={[required]} />
            </div>
            <div>
                <Field component={Input} name={'rememberMe'} type={'checkbox'}  /> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

export const Login = () => {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}