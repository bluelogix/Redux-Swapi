import 
{ FETCH_CHARACTER_START,
  FETCH_CHARACTER_SUCCESS,
  FETCH_CHARACTER_FAILURE }  
from '../actions';



const initialState = {
    characters: [],
    fetching: false,
    error: null
  // Array characters, Boolean fetching, null error.
};


    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
      case FETCH_CHARACTER_START:
        return {
          ...state,
            // error: '',
            fetching: true
        };
        case FETCH_CHARACTER_SUCCESS:
          return {
            ...state,
            characters: action.payload,
            fetching: false,
            // error: null
          };
        case FETCH_CHARACTER_FAILURE:
            return {
              ...state,
              error: action.payload,
              fetching: false
            }
    default:
      return state;
  }
};
