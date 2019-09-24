import { ADD_REMINDER } from '../types';

export const add_Reminder = (text, date) => {
   const action = {
      type: ADD_REMINDER,
      text,
      date
   }
   
   return action;
}