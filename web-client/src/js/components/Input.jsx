import * as React from "react";
import {Field, ErrorMessage} from "formik";
import {TextError} from "./TextError";

export function Input(props){
    const {label, name, ...rest } = props

    return (
     <div className='form-control'>
         <label htmlFor={name}>{label}</label>
         <Field id={name} name={name} {...rest}/>
         <ErrorMessage name={name} component={TextError}/>

     </div>
    )
}