import { park } from '../../api/schema'
import { normalize } from 'normalizr'
import { FETCH_DATA } from './actions'

export default function(state = {}, action) {
  switch (action.type) {

    case FETCH_DATA: {
      const data = [ ...action.payload.data ]
      const normalized = normalize(data, [park])

      return {
        ...state,
        ...normalized.entities,
      }
    }

    default: {
      return {
        ...state,
      }
    }
  }
}
