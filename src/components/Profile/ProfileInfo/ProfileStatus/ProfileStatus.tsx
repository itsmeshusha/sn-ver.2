import React, {useState} from 'react';

export const ProfileStatus = () => {
    const [status, setStatus] = useState('fdfdfd')
    const [editMode, setEditMode] = useState(false)

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
    }

    return (
        <div>
            {editMode
                ? <div>
                    <input autoFocus={true} value={status} onBlur={deactivateEditMode}/>
                </div>
                : <span onDoubleClick={activateEditMode}>{status}</span>}
        </div>
    )
}