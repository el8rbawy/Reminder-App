import React from 'react';
import { connect } from 'react-redux';
import * as yup from 'yup';
import { Formik, Field, ErrorMessage } from 'formik';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faPlus } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import { add_Reminder, clear_Reminders } from '../../actions';
import { Form, Buttons } from './style';

const Inputs = (props) => {

   const handleSubmit = (values, {resetForm}) => {
      resetForm()
      props.add_Reminder(values.name, values.date)
      toast.info('Added successfully')
   },
   Schema = () => {
      const schema = yup.object().shape({
         name: yup.string().required()
         .min(5, 'must be at least 5 characters').max(65, ' must be at most 65 characters')
      })
      return schema;
   },
   clearAll = () => {
      props.clear_Reminders()
   }

   return (
      <Formik 
         initialValues={{ name: '', date: new Date() }}
         onSubmit={handleSubmit}
         validationSchema={Schema}
         render={props => (
            <Form autoComplete="off" onSubmit={ props.handleSubmit }>
               { props.errors.name && Object.keys(props.touched).length ? <span><ErrorMessage name="name" /></span> : null }
               <Field name="name" type="text" placeholder="what should you do?" />
               <DatePicker
                  selected={ props.values.date }
                  onChange={value => props.setFieldValue('date', value)}
                  dateFormat="MM/dd/yyyy h:mm aa"
                  showTimeInput
                  inline
                  minDate={new Date()}
               />
               <Buttons>
                  <button type="submit"><FontAwesomeIcon icon={faPlus} />
                     <span>ADD</span>
                  </button>
                  <button type="button" onClick={ clearAll }><FontAwesomeIcon icon={faTrashAlt} /> 
                     <span>ALL</span>
                  </button>
               </Buttons>
            </Form>
         )}
      />
   )
}

export default connect(null, { add_Reminder, clear_Reminders })(Inputs);