export const FETCH_SORTERS = 'FETCH_SORTERS'

export function fetchSorters () {
  return {
    type: FETCH_SORTERS,
    payload: [
      'Name',
      'Park Size',
      'Annual Visitors',
      'Date Established',
    ],
  }
}
