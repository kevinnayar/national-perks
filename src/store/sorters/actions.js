export const FETCH_SORTERS = 'FETCH_SORTERS'

export function fetchSorters() {
  return function (dispatch, getState, api) {
    return api
      .getSorters()
      .then(payload => {
        dispatch({
          type: FETCH_SORTERS,
          payload,
        })
        return payload
      })
  }
}
