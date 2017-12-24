export const FETCH_ACTIVE_SORTER_ID = 'FETCH_ACTIVE_SORTER_ID'
export const UPDATE_ACTIVE_SORTER_ID = 'UPDATE_ACTIVE_SORTER_ID'

export function fetchActiveSorterId(id) {
  console.log(id)
  return {
    type: FETCH_ACTIVE_SORTER_ID,
    payload: id
  }
}

export function updateActiveSorterId(id, ids) {
  (ids.includes(id)) ? ids.splice(ids.indexOf(id), 1) : ids.push(id)

  return {
    type: UPDATE_ACTIVE_SORTER_ID,
    payload: ids.sort()
  }
}
