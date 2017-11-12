import deepFreeze from 'deep-freeze'
import { FETCH_STATES, FETCH_ACTIVE_STATES, UPDATE_ACTIVE_STATES } from './actions'

export default function(state = [], action) {
  switch (action.type) {

    case FETCH_STATES: {
      const defaults = [...action.payload]

      return deepFreeze({
        ...state,
        defaults,
      })
    }

    case FETCH_ACTIVE_STATES: {
      const active = [...action.payload]

      return deepFreeze({
        ...state,
        active,
      })
    }

    case UPDATE_ACTIVE_STATES: {
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
