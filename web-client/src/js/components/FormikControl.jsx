import * as React from "react";
import {Input} from "./Input";
import {Textarea} from "./Textarea";
import {Select} from "./Select";
import {RadioButtons} from "./RadioButtons";
import {DatePicker} from "./DatePicker";

export function FormikControl (props) {
    const { control, ...rest } = props
    switch (control){
        case 'input':
            return <Input {...rest} />
        case 'textarea':
            return <Textarea {...rest} />
        case 'select':
            return <Select {...rest}/>
        case 'radio':
            return <RadioButtons {...rest} />
        case 'date':
            return <DatePicker {...rest} />
        default:
            return null

    }
}