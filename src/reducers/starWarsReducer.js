import 
{ FETCH_CHARACTER_START,
  FETCH_CHARACTER_SUCCESS,
  FETCH_CHARACTER_FAILURE }  
from '../actions';



const initialState = {
  characters: [],
 fetching: false,
  error: 'null'
  // Array characters, Boolean fetching, null error.
};




export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
