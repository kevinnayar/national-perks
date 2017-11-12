export const FETCH_PARKS = 'FETCH_PARKS'
export const FETCH_ACTIVE_PARKS = 'FETCH_ACTIVE_PARKS'
export const UPDATE_ACTIVE_PARKS = 'UPDATE_ACTIVE_PARKS'

export function fetchParks() {
  return function (dispatch, getState, api) {
    api
      .getParks()
      .then(response => {
        dispatch({
          type: FETCH_PARKS,
          payload: response.data
        })
        dispatch({
          type: FETCH_ACTIVE_PARKS,
          payload: response.data
        })
      })
      .catch(error => {
        console.log(error)
      })
  }
}

export function updateActiveParks(newState, activeStates, parks, activeParks) {
  let newActiveParks = [...activeParks]

  newActiveParks = newActiveParks.reduce((previousParks, currentPark) => {
    if (!currentPark.states.includes(newState)) {
      return [...previousParks, currentPark]
    }
    else {
      return [...previousParks]
    }
  }, [])

  console.log(newActiveParks)

  return {
    type: UPDATE_ACTIVE_PARKS,
    payload: newActiveParks
  }
}
