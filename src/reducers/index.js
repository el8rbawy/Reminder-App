import { ADD_REMINDER, REMOVE_REMINDER, CLEAR_REMINDERS } from '../types';
import { bake_cookie, read_cookie } from 'sfcookies';

const reminders = (state = [], action) => {
   let reminders = null;
   state = read_cookie('reminders')

   switch(action.type) {
      case ADD_REMINDER:
         reminders = [...state, {
            id: Math.random(),
            text: action.text,
            date: action.date
         }]
         bake_cookie('reminders', reminders)
         return reminders;

      case REMOVE_REMINDER:
         reminders = state.filter(reminder => reminder.id !== action.id)
         bake_cookie('reminders', reminders)
         return reminders;

      case CLEAR_REMINDERS:
         reminders = []
         bake_cookie('reminders', reminders)
         return reminders;

      default:
         return state
   }

}

export default reminders;