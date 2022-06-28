import React, { useContext, Fragment } from 'react'
import { FormContext } from "../../FormContext"

const Radio = ({ id, label, options }) => {
    const { handleChange } = useContext(FormContext)

    return (
        <>
            <label className="form-check-label" htmlFor="exampleCheck1">{label}</label>

            <div className="mb-3 form-check" onChange={event => handleChange(id, event)}>

                {
                    options.map((val, index) => {
                        return (<Fragment key={val.value}> 
                            <input type="radio" name={id} id={id} value={val.value}  /> {val.label}
                        </Fragment>
                        )
                    })
                }

            </div>
        </>

    )
}

export default Radio