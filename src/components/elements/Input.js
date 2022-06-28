import React, { useContext } from 'react'
import { FormContext } from '../../FormContext';

const Input = ({ id, label, value , required}) => {
    const { handleChange } = useContext(FormContext)
    return (
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">{label}</label>
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                value={value}
                onChange={event => handleChange(id, event)}
                required={required}
            />
        </div>
    )
}

export default Input
