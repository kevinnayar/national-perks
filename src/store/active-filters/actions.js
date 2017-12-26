export const FETCH_ACTIVE_FILTER_IDS = 'FETCH_ACTIVE_FILTER_IDS'

export function fetchActiveFilterIds(filters) {
  return {
    type: FETCH_ACTIVE_FILTER_IDS,
    payload: Object.keys(filters).map(state => filters[state].id).sort(),
  }
}

export const UPDATE_ACTIVE_FILTER_IDS = 'UPDATE_ACTIVE_FILTER_IDS'

export function updateActiveFilterIds(id, ids) {
  (ids.includes(id)) ? ids.splice(ids.indexOf(id), 1) : ids.push(id)

  return {
    type: UPDATE_ACTIVE_FILTER_IDS,
    payload: ids.sort()
  }
}

export const BULK_UPDATE_ACTIVE_FILTER_IDS = 'BULK_UPDATE_ACTIVE_FILTER_IDS'

export function bulkUpdateActiveFilterIds(ids) {
  return {
    type: UPDATE_ACTIVE_FILTER_IDS,
    payload: ids.sort()
  }
}
