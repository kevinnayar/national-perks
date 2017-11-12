export const FETCH_SORTERS = 'FETCH_SORTERS'
export const FETCH_ACTIVE_SORTER = 'FETCH_ACTIVE_SORTER'
const sorters = [
  'Name',
  'Park Size',
  'Annual Visitors',
  'Date Established',
]

export function fetchSorters() {
  return function (dispatch) {
    dispatch({
      type: FETCH_SORTERS,
      payload: sorters
    })
    dispatch({
      type: FETCH_ACTIVE_SORTER,
      payload: [sorters[0]]
    })
  }
}
