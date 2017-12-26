export const FETCH_ACTIVE_ITEM_IDS = 'FETCH_ACTIVE_ITEM_IDS'

export function fetchActiveItemIds(filters) {
  return {
    type: FETCH_ACTIVE_ITEM_IDS,
    payload: Object.keys(filters).map(state => filters[state].id).sort(),
  }
}

export const UPDATE_ACTIVE_ITEM_IDS = 'FETCH_ACTIVE_ITEM_IDS'

export function updateActiveItemIds(id, ids) {
  (ids.includes(id)) ? ids.splice(ids.indexOf(id), 1) : ids.push(id)

  return {
    type: UPDATE_ACTIVE_ITEM_IDS,
    payload: ids.sort()
  }
}
