import React from 'react';
import { Formik, Form, Field } from 'formik';

const Inputs = () => {
   return (
      <Formik 
         initialValues={{ name: '', data: '' }}
         onSubmit={values => console.log(values)}
         render={props => (
            <Form onSubmit={ props.handleSubmit }>
               <Field name="name" type="text" placeholder="what should i do?" />
               <Field name="data" type="datetime-local" placeholder="Date" />
               <button type="submit">Add Reminder</button>
            </Form>
         )}
      />
   )
}

export default Inputs;