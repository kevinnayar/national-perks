import { FETCH_SORTERS } from './actions'

export default function(state = [], action) {
  switch (action.type) {

    case FETCH_SORTERS: {
      const sorters = [ ...action.payload.data ]

      return {
        ...state,
        ...sorters,
      }
    }

    default: {
      return {
        ...state,
      }
    }
  }
}
