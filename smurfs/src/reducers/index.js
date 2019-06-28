/*
  Be sure to import in all of the action types from `../actions`
*/
    
import * as types from "../actions/index";
import { type } from "os";

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this

*/

export const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

export const smurfReducer = (state = initialState, action) => {
  switch(action.types){
    case types.FETCH_START:
      return {...state, fetchingSmurfs:true};
    case types.FETCH_SUCCESS:
      return {...state, smurfs: action.payload, fetchingSmurfs:false};
    case types.FETCH_FAIL:
      return {...state, error: action.payload, fetchingSmurfs:false};
    case types.ADD_SMURF:
      return {...state, addingSmurf:true};
    case types.ADD_SUCCESS:
      return {...state, smurfs: action.payload, addingSmurf:false};
    case types.ADD_FAIL:
      return {...state, error: action.payload, addingSmurf:false};
     default:
       return state;        
  }
}