import React from 'react';
import { connect } from 'react-redux';

const View = (props) => {

   let mapReminders = props.reminder.map(item => (
      <li key={ item.id }>
         <span>{ item.text }</span>
         <span>{ item.date }</span>
      </li>
   ))

   return (
      <ul>
         { mapReminders }
      </ul>
   )
}

const mapStateToProps = (state) => ({reminder: state})

export default connect(mapStateToProps)(View);