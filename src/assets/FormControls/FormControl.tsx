import React from 'react'
import s from './FormControl.module.css'

const FormControl = ({input, meta, ...props}: any) => {
    const error = meta.touched && meta.error
    return (
        <div className={`${s.formControl} ${error ? s.error : ''}`}>
            <div>
                {props.children}
            </div>
            {error && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea = (props: any) => {
    const {input, meta, ...restProps} = props
    return (
        <FormControl {...props}>
            <textarea {...input} {...restProps} />
        </FormControl>
    )
}
export const Input = (props: any) => {
    const {input, meta, ...restProps} = props
    return (
        <FormControl {...props}>
            <input {...input} {...restProps} />
        </FormControl>
    )
}