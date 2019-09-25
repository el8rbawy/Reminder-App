import { ADD_REMINDER, REMOVE_REMINDER, CLEAR_REMINDERS } from '../types';

export const 
   add_Reminder = (text, date) => {
      const action = {
         type: ADD_REMINDER,
         text,
         date
      }
      
      return action;
   },
   remove_Reminder = (id) => {
      const action = {
         type: REMOVE_REMINDER,
         id
      }

      return action;
   },
   clear_Reminder = () => {
      const action = {
         type: CLEAR_REMINDERS
      }
      
      return action;
   }