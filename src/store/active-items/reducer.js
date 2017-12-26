import {
  FETCH_ACTIVE_ITEM_IDS,
  UPDATE_ACTIVE_ITEM_IDS,
} from './actions'

export default function(state = [], action) {
  switch (action.type) {

    case FETCH_ACTIVE_ITEM_IDS: {
      return [
        ...state,
        ...action.payload,
      ]
    }

    case UPDATE_ACTIVE_ITEM_IDS: {
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
