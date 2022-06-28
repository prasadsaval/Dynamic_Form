import React from 'react'
// import Checkbox from './elements/Checkbox';
import Radio from './elements/Radio';
import Input from './elements/Input';
import Select from './elements/Select';
import TextArea from './elements/TextArea';
const Element = ({ field: { type, id, label, value, validations, options } }) => {

    switch (type) {
        case 'text':
            return (<Input
                id={id}
                label={label}
                value={value}
                required={validations.nullable}

            />)

        case 'radio':
            return (<Radio
                id={id}
                label={label}
                value={value}
                options={options}
            />)

        case "number":
            return (
                <Input
                id={id}
                label={label}
                value={value}
                />
            )
        case "select":
            return (
                <Select 
                id={id}
                label={label}
                value={value}
                options={options}
                />
            )
        case "textArea":
            return(
                <TextArea
                id={id}
                label={label}
                value={value}
                />
            )

        default:
            return null;
    }


}

export default Element
