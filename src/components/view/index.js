import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { remove_Reminder } from '../../actions';

const View = (props) => {

   let mapReminders = props.reminder.map(item => (
      <li key={ item.id }>
         <span>{ item.text }</span>
         <span>{ moment(new Date(item.date)).fromNow() }</span>
         <span onClick={() => props.remove_Reminder(item.id)}>X</span>
      </li>
   ))

   return <ul>{ mapReminders }</ul>
   
}

export default connect(
   state => ({reminder: state}), { remove_Reminder }
)(View);