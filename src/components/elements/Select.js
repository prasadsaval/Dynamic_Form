import React, { useContext } from 'react'
import { FormContext } from '../../FormContext';
const Select = ({ id, label, placeholder, value, options }) => {
    const { handleChange } = useContext(FormContext)

    return (
        <>
            <label className="form-label">{label}</label>
            <select className="form-select" aria-label="Default select example"
                onChange={event => handleChange(id, event)}
            >
                <option >Open this select menu</option>
                {options.length > 0 && options.map((option, i) =>
                    <option value={option.value} key={i}>{option.label}</option>

                )}
            </select>
        </>
    )
}

export default Select
