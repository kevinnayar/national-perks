export const FETCH_ACTIVE_FILTER_IDS = 'FETCH_ACTIVE_FILTER_IDS'
export const UPDATE_ACTIVE_FILTER_IDS = 'UPDATE_ACTIVE_FILTER_IDS'

export function fetchActiveFilterIds(filters) {
  return {
    type: FETCH_ACTIVE_FILTER_IDS,
    payload: Object.keys(filters).map(state => filters[state].id).sort(),
  }
}

export function updateActiveFilterIds(id, ids) {
  (ids.includes(id)) ? ids.splice(ids.indexOf(id), 1) : ids.push(id)

  return {
    type: UPDATE_ACTIVE_FILTER_IDS,
    payload: ids.sort()
  }
}
