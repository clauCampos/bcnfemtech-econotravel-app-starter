import * as React from "react";
import {Formik, Form} from 'formik'
import * as Yup from 'yup'
import 'bootstrap/dist/css/bootstrap.min.css'
import {FormikControl} from "./FormikControl";


export function FormikContainer() {

    const dropdownOptions = [
        {key: 'Selection an option', value: ''},
        {key: 'Option 1', value: 'rOption1'},
        {key: 'Option 2', value: 'rOption2'},
        {key: 'Option 3', value: 'rOption3'}
    ]
    const radioOptions = [
        {key: 'Option 1', value: 'rOption1'},
        {key: 'Option 2', value: 'rOption2'},
        {key: 'Option 3', value: 'rOption3'},

    ]

    const initialValues = {
        email: '',
        description: '',
        selectOption: '',
        radioOption:'',
        birthDate: null

    }
    const validationSchema = Yup.object({
        email: Yup.string().required('Required'),
        description: Yup.string().required('Required'),
        selectOption: Yup.string().required('Required'),
        radioOption: Yup.string().required('Required'),
        birthDate: Yup.date().required('Required').nullable()

    })
    const onSubmit = values => {
        console.log('Form data', values)
        console.log('Saved data', JSON.parse(JSON.stringify(values)))
    }

    return (
        <div className='Form-controller-container'>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {formik => (
                    <Form>
                        <FormikControl
                            control='input'
                            type='email'
                            label='Email'
                            name='email'
                        />
                        <FormikControl
                            control='textarea'
                            label='Description'
                            name='description'
                        />

                        <FormikControl
                            control='select'
                            label='Selection a topic'
                            name='selectOption'
                            options={dropdownOptions}
                        />

                        <FormikControl
                            control='radio'
                            label='Radio Topic'
                            name='radioOption'
                            options={radioOptions}
                        />

                        <FormikControl
                            control='date'
                            label='Pick a date'
                            name='birthDate'
                        />

                        <button type='submit'> Submit</button>
                    </Form>
                )}

            </Formik>
        </div>

    )

}