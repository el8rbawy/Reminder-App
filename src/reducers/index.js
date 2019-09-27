import { ADD_REMINDER, REMOVE_REMINDER, CLEAR_REMINDERS } from '../types';

const reminders = (state = [
   {id: 1, text: 'Lorem Ipsum is simply dummy text of the printing and typesetting', date: null}]
   , action) => {
   let reminders = null;

   switch(action.type) {
      case ADD_REMINDER:
         reminders = [...state, {
            id: Math.random(),
            text: action.text,
            date: action.date
         }]
         return reminders;

      case REMOVE_REMINDER:
         reminders = state.filter(reminder => reminder.id !== action.id)
         return reminders;

      case CLEAR_REMINDERS:
         reminders = []
         return reminders;

      default:
         return state
   }

}

export default reminders;