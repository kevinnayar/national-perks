import {
  FETCH_ACTIVE_FILTER_IDS,
  UPDATE_ACTIVE_FILTER_IDS,
} from './actions'

export default function(state = [], action) {
  switch (action.type) {

    case FETCH_ACTIVE_FILTER_IDS: {
      return [
        ...state,
        ...action.payload,
      ]
    }

    case UPDATE_ACTIVE_FILTER_IDS: {
      return [
        ...action.payload,
      ]
    }

    default: {
      return [
        ...state,
      ]
    }
  }
}
