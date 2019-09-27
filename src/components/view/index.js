import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { remove_Reminder } from '../../actions';
import { UL } from './style';

const View = (props) => {

   let mapReminders = props.reminder.length ? props.reminder.map((item, index) => (
      <li key={ item.id }>
         <span>{index+1 + '. ' + item.text }</span>
         <span>{ moment(new Date(item.date)).fromNow() }</span>
         <span onClick={() => props.remove_Reminder(item.id)}>
            <FontAwesomeIcon icon={ faTimes } />
         </span>
      </li>
   )) : <div style={{textAlign: "center", lineHeight: "382.47px"}}>
            Unfortunately empty, add a reminder now!
        </div>

   return <UL>{ mapReminders }</UL>
   
}

export default connect(
   state => ({reminder: state}), { remove_Reminder }
)(View);