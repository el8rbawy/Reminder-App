import { ADD_REMINDER, REMOVE_REMINDER } from '../types';

const reminders = (state = [], action) => {
   let reminders = null;

   if (action.type === ADD_REMINDER) {

      reminders = [...state, {
         id: Math.random(),
         text: action.text,
         date: action.date
      }]

      return reminders;

   } else if (action.type === REMOVE_REMINDER) {

      reminders = state.filter(reminder => reminder.id !== action.id)
      return reminders;

   } else {return state;}

}

export default reminders;