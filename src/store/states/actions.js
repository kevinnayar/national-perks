export const FETCH_STATES = 'FETCH_STATES'

export function fetchStates () {
  return function (dispatch, getState, api) {
    api
      .getStates()
      .then(response => {
        dispatch({
          type: FETCH_STATES,
          payload: response.data
        })
      })
      .catch(error => {
        throw new Error(error)
      })
  }
}
