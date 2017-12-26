import { UPDATE_ACTIVE_SORTER } from './actions'

export default function(state = {id: "sorter_name"}, action) {
  switch (action.type) {

    case UPDATE_ACTIVE_SORTER: {
      return {
        ...action.payload
      }
    }

    default: {
      return {
        ...state,
      }
    }
  }
}
