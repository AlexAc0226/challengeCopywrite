import axios from "axios";

export const ADD_TEXT = "ADD_TEXT";

export function addText(text) {
    return async function (dispatch) {
    const r = await axios.get(`http://localhost:3001/iecho?text=${text}`);
    
    r.data.text ? dispatch({ type: ADD_TEXT, payload: r.data.text }) 
    : alert(r.data.text);
  }
}  


