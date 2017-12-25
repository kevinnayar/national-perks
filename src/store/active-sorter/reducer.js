import { UPDATE_ACTIVE_SORTER_ID } from './actions'

export default function(state = '', action) {
  switch (action.type) {

    case UPDATE_ACTIVE_SORTER_ID: {
      return action.payload
    }

    default: {
      return state
    }
  }
}
