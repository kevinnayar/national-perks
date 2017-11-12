import deepFreeze from 'deep-freeze'
import { FETCH_SORTERS } from './actions'

export default function(state = [], action) {
  switch (action.type) {

    case FETCH_SORTERS: {
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
