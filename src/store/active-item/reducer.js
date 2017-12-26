import { FETCH_ACTIVE_ITEM } from './actions'

export default function(state = {}, action) {
  switch (action.type) {

    case FETCH_ACTIVE_ITEM: {
      return {
        ...state,
        ...action.payload,
      }
    }

    default: {
      return {
        ...state,
      }
    }
  }
}
