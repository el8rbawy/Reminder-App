import { ADD_REMINDER } from '../types'

const reminders = (state = [], action) => {
   let save = null;

   if (action.type === ADD_REMINDER) {
      save = [...state, {
         id: Math.random(),
         text: action.text,
         date: action.date
      }]
      
      return save;

   } else {return state;}
   
}

export default reminders;