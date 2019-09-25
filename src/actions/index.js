import { ADD_REMINDER, REMOVE_REMINDER } from '../types';

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

      console.log('remove', action)
      return action;
   }