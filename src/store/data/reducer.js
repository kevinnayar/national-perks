import { FETCH_DATA } from './actions'

export default function(state = {}, action) {
  switch (action.type) {

    case FETCH_DATA: {
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
