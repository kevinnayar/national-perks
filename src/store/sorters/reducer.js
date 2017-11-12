import deepFreeze from 'deep-freeze'
import { FETCH_SORTERS, FETCH_ACTIVE_SORTER } from './actions'

export default function(state = [], action) {
  switch (action.type) {

    case FETCH_SORTERS: {
      const defaults = [...action.payload]

      return deepFreeze({
        ...state,
        defaults,
      })
    }

    case FETCH_ACTIVE_SORTER: {
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
