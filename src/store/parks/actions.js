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
  let parksToRemove = []
  let parksToInclude = []

  if (!activeStates.includes(newState)) {
    parks.forEach(park => {
      if (park.states.includes(newState)) {
        console.log('remove', park.title)
        parksToRemove.push(park)
      }
    })
  }
  else {
    parks.forEach(park => {
      if (park.states.includes(newState)) {
        console.log('add', park.title)
        parksToInclude.push(park)
      }
    })
  }

  if (parksToRemove.length > 0) {
    parksToRemove.forEach(park => {
      newActiveParks.splice(newActiveParks.indexOf(park), 1)
    })
  }
  else if (parksToInclude.length > 0) {
    parksToInclude.forEach(park => {
      newActiveParks.push(park)
    })
  }

  newActiveParks = newActiveParks.sort((a, b) => {
    if (a.title.toLowerCase() < b.title.toLowerCase()) return -1
    if (a.title.toLowerCase() > b.title.toLowerCase()) return 1
    return 0
  })

  console.log(newActiveParks)

  return {
    type: UPDATE_ACTIVE_PARKS,
    payload: newActiveParks
  }
}
