import { FETCH_SORTERS } from './actions'

export default function(state = {}, action) {
  switch (action.type) {

    case FETCH_SORTERS: {
      return {
        ...state,
        ...action.payload.data,
      }
    }

    default: {
      return {
        ...state,
      }
    }
  }
}
