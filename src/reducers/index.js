import {
  ADD_RECIPE,
  REMOVE_FROM_CALENDAR
} from '../actions';

const initialCalendarState = {
  sunday: {
    breakfast: null,
    lunch: null,
    finner: null.
  },
  monday: {
    breakfast: null,
    lunch: null,
    finner: null.
  },
  tuesday: {
    breakfast: null,
    lunch: null,
    finner: null.
  },
  wednesday: {
    breakfast: null,
    lunch: null,
    finner: null.
  },
  thursday: {
    breakfast: null,
    lunch: null,
    finner: null.
  },
  friday: {
    breakfast: null,
    lunch: null,
    finner: null.
  },
  saturday: {
    breakfast: null,
    lunch: null,
    finner: null.
  },
}

function calendar(state = initialCalendarState, action){
  const {day, recipe, meal} = action;

  switch(action.type){
    case ADD_RECIPE:
      return {
        ...state,
        [day] : {
          ...state[day],
          [meal]: recipe.label,
        }
      }
    case REMOVE_FROM_CALENDAR:
      return {
        ...state,
        [day]: {
          ...state[day],
          [meal]: null,
        }
      }
    default:
      return state;
  }
}

export default calendar;
