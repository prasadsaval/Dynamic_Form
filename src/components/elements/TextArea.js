import React, { useContext } from 'react'
import { FormContext } from '../../FormContext';
const TextArea = ({ id, label, value, required }) => {
    const { handleChange } = useContext(FormContext)

    return (
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">{label}</label>
            <textarea id={id} className="md-textarea form-control" rows="3" value={value}
            onChange={event => handleChange(id, event)}
            > 
            </textarea>
        </div>
    )
}

export default TextArea



