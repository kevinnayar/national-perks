import deepFreeze from 'deep-freeze'
import { FETCH_STATES } from './actions'

export default function(state = [], action) {
  switch (action.type) {

    case FETCH_STATES: {
      const data = [...action.payload]

      return deepFreeze({
        ...state,
        data,
      })
    }

    default: {
      return deepFreeze({
        ...state,
      })
    }
  }
}
