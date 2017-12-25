import { park } from '../../api/schema'
import { normalize } from 'normalizr'
import { FETCH_FILTERS } from './actions'

export default function(state = {}, action) {
  switch (action.type) {

    case FETCH_FILTERS: {
      const data = [ ...action.payload.data ]
      const normalized = normalize(data, [park])

      return {
        ...state,
        ...normalized.entities.states,
      }
    }

    default: {
      return {
        ...state,
      }
    }
  }
}
