/* eslint-disable array-callback-return */
import {
  ADD_TEXT
} from "../actions/index.js";

const initialState = {
  data: [],  
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    
    case ADD_TEXT: 
    return {
        ...state,
        data: [...state.data, action.payload],
      };
      
    default:
      return { ...state };
  }
}

export default rootReducer;
