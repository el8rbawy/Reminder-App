import React from 'react';
import { connect } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { add_Reminder } from '../../actions';

const Inputs = (props) => {

   const handleSubmit = (values, {resetForm}) => {
      console.log(values)
      resetForm()
      props.add_Reminder(values.name, values.date)
   }

   return (
      <Formik 
         initialValues={{ name: '' }}
         onSubmit={handleSubmit}
         render={props => (
            <Form autoComplete="off" onSubmit={ props.handleSubmit }>
               <Field name="name" type="text" placeholder="what should i do?" />
               <DatePicker
                  selected={new Date()}
                  onChange={value => props.setFieldValue('date', value)}
                  timeInputLabel="Time:"
                  dateFormat="MM/dd/yyyy h:mm aa"
                  showTimeInput
                  inline
               />
               <button type="submit">Add Reminder</button>
            </Form>
         )}
      />
   )
}

export default connect(null, { add_Reminder })(Inputs);