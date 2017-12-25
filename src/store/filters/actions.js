export const FETCH_FILTERS = 'FETCH_FILTERS'

export function fetchFilters(data) {
  return {
    type: FETCH_FILTERS,
    payload: data,
  }
}
