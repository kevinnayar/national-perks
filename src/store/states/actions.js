export const FETCH_STATES = 'FETCH_STATES'
export const FETCH_ACTIVE_STATES = 'FETCH_ACTIVE_STATES'
export const UPDATE_ACTIVE_STATES = 'UPDATE_ACTIVE_STATES'

export function fetchStates() {
  return function (dispatch, getState, api) {
    api
      .getStates()
      .then(response => {
        dispatch({
          type: FETCH_STATES,
          payload: response.data
        })
        dispatch({
          type: FETCH_ACTIVE_STATES,
          payload: response.data
        })
      })
      .catch(error => {
        throw new Error(error)
      })
  }
}

export function updateActiveStates(newState, activeStates) {
  let newActiveStates = [...activeStates]

  if (activeStates.includes(newState)) {
    newActiveStates.splice(newActiveStates.indexOf(newState), 1)
  }
  else {
    newActiveStates.push(newState)
  }

  newActiveStates = newActiveStates.sort()
  
  return {
    type: UPDATE_ACTIVE_STATES,
    payload: newActiveStates
  }
}
