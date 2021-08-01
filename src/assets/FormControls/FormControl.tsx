import React from 'react'
import s from './FormControl.module.css'

export const Textarea = ({input, meta, ...props}: any) => {
    const error = meta.touched && meta.error
    return (
        <div className={`${s.formControl} ${error ? s.error : ''}`}>
            <div>
                <textarea {...input} {...props} />
            </div>
            {error && <span>{meta.error}</span>}
        </div>
    )
}