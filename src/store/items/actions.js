export const FETCH_ITEMS = 'FETCH_ITEMS'

export function fetchItems(data) {
  return {
    type: FETCH_ITEMS,
    payload: data,
  }
}
