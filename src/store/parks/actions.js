export const FETCH_PARKS = 'FETCH_PARKS'

export function fetchParks () {
  return function (dispatch, getState, api) {
    api
      .getParks()
      .then(response => {
        dispatch({
          type: FETCH_PARKS,
          payload: response.data
        })
      })
      .catch(error => {
        console.log(error)
      })
  }
}
