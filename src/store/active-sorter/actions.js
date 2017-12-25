export const UPDATE_ACTIVE_SORTER_ID = 'UPDATE_ACTIVE_SORTER_ID'

export function updateActiveSorterId(id) {
  return {
    type: UPDATE_ACTIVE_SORTER_ID,
    payload: id
  }
}
