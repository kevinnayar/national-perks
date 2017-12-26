export const UPDATE_ACTIVE_SORTER = 'UPDATE_ACTIVE_SORTER'

export function updateActiveSorter(id) {
  return {
    type: UPDATE_ACTIVE_SORTER,
    payload: {
      id,
    }
  }
}
