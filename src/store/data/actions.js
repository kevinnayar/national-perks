export const FETCH_DATA = 'FETCH_DATA'

export function fetchData() {
  return (dispatch, getState, api) => {
    return api
      .getData()
      .then(payload => {
        dispatch({
          type: FETCH_DATA,
          payload,
        })
        return payload
      })
      .catch(error => {
        throw new Error(error)
      })
  }
}
