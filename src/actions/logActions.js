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
} from './types'

// Get logs from server
export const getLogs = () => async dispatch => {
  try {
    setLoading()

    const res = await fetch('/logs')
    const data = await res.json

    dispatch({
      type: GET_LOGS,
      payload: data
    })   
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.res.data
    })
  }
}

// Add new log
export const addLog = (log) => async dispatch => {
  try {
    setLoading()

    const res = await fetch('./logs', {
      method: 'POST',
      body: JSON.stringify(log),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await res.json

    dispatch({
      type: ADD_LOG,
      payload: data
    })   
  } catch (err) {
    dispatch({
      type: LOGS_ERROR,
      payload: err.data
    })
  }
}

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  }
}