import * as React from "react";
import {Formik, Form} from 'formik'
import * as Yup from 'yup'
import 'bootstrap/dist/css/bootstrap.min.css'
import {FormikControl} from "./FormikControl";


export function FormikContainer() {

    const dropdownOptions = [
        {key: 'Selecciona una opción', value: ''},
        {key: 'Paseo en bicicleta por el Montseny', value: 'rOption1'},
        {key: 'Descubre la Barcelona Modernista de noche', value: 'rOption2'},
        {key: 'Descubre la costa en barco de vela', value: 'rOption3'}
    ]
    const radioOptions = [
        {key: '1', value: 'rOption1'},
        {key: '2', value: 'rOption2'},
        {key: '3+', value: 'rOption3'},

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
        description: Yup.string().required('* Required'),
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
                            label='Mensaje'
                            name='description'
                        />

                        <FormikControl
                            control='select'
                            label='Experiencia'
                            name='selectOption'
                            options={dropdownOptions}
                        />

                        <FormikControl
                            control='radio'
                            label='Personas'
                            name='radioOption'
                            options={radioOptions}
                        />

                        <FormikControl
                            control='date'
                            label='Selecciona'
                            name='birthDate'
                        />

                        <button className="btn__reservation" type='submit'>Enviar</button>
                    </Form>
                )}

            </Formik>
        </div>

    )

}