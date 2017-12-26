export const FETCH_ACTIVE_ITEM = 'FETCH_ACTIVE_ITEM'

export function fetchActiveItem(activeItemId, items) {
  return {
    type: FETCH_ACTIVE_ITEM,
    payload: items[activeItemId]
  }
}
