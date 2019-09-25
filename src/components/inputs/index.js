import React from 'react';
import { connect } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import { add_Reminder } from '../../actions';

const Inputs = (props) => {

   const handleSubmit = (values, {resetForm}) => {
      resetForm()
      props.add_Reminder(values.name, values.data)
   }

   return (
      <Formik 
         initialValues={{ name: '', data: '' }}
         onSubmit={handleSubmit}
         render={props => (
            <Form autoComplete="off" onSubmit={ props.handleSubmit }>
               <Field name="name" type="text" placeholder="what should i do?" />
               <Field name="data" type="datetime-local" placeholder="Date" />
               <button type="submit">Add Reminder</button>
            </Form>
         )}
      />
   )
}

export default connect(null, { add_Reminder })(Inputs);