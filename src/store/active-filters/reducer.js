import {
  FETCH_ACTIVE_FILTER_IDS,
  UPDATE_ACTIVE_FILTER_IDS
} from './actions'

export default function(state = [], action) {
  switch (action.type) {

    case FETCH_ACTIVE_FILTER_IDS: {
      const data = [ ...action.payload ]

      return [
        ...state,
        ...data,
      ]
    }

    case UPDATE_ACTIVE_FILTER_IDS: {
      const data = [ ...action.payload ]

      return [
        ...data,
      ]
    }

    default: {
      return [
        ...state,
      ]
    }
  }
}
