import {
  GET_LOGS,
  SET_LOADING,
  LOGS_ERROR,
  ADD_LOG,
  // DELETE_LOG,
  // SET_CURRENT,
  // CLEAR_CURRENT,
  // UPDATE_LOG,
  // CLEAR_LOGS,
  // SEARCH_LOGS,
  // GET_TECHS,
  // ADD_TECH,
  // DELETE_TECH,
  // TECHS_ERROR
} from '../actions/types'

const initialState = {
  logs: null,
  current: null,
  loading: false,
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }
    case LOGS_ERROR:
      console.error(action.payload)
      return {
        ...state,
        error: action.payload
      }
    case GET_LOGS: 
      return {
        ...state,
        logs: action.payload,
        loading: false
      }
    case ADD_LOG:
      return {
        ...state,
        logs: [...state.logs, action.payload],
        loading: false
      }
    default:
      return state
  }
}