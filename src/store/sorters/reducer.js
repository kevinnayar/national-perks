import { FETCH_SORTERS } from './actions'

export default function(state = {}, action) {
  switch (action.type) {

    case FETCH_SORTERS: {
      const data = action.payload.data

      return {
        ...state,
        ...data,
      }
    }

    default: {
      return {
        ...state,
      }
    }
  }
}
