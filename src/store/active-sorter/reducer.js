import {
  FETCH_ACTIVE_SORTER_ID,
  UPDATE_ACTIVE_SORTER_ID,
} from './actions'

export default function(state = [], action) {
  switch (action.type) {

    case FETCH_ACTIVE_SORTER_ID: {
      return action.payload
    }

    case UPDATE_ACTIVE_SORTER_ID: {
      return action.payload
    }

    default: {
      return state
    }
  }
}
