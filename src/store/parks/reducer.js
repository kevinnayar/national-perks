import deepFreeze from 'deep-freeze'
import { FETCH_PARKS, FETCH_ACTIVE_PARKS, UPDATE_ACTIVE_PARKS } from './actions'

export default function(state = {}, action) {
  switch (action.type) {

    case FETCH_PARKS: {
      const defaults = [...action.payload]

      return deepFreeze({
        ...state,
        defaults,
      })
    }

    case FETCH_ACTIVE_PARKS: {
      const active = [...action.payload]

      return deepFreeze({
        ...state,
        active,
      })
    }

    case UPDATE_ACTIVE_PARKS: {
      const active = [...action.payload]

      return deepFreeze({
        ...state,
        active,
      })
    }

    default: {
      return deepFreeze({
        ...state,
      })
    }
  }
}
