import { park } from '../../api/schema'
import { normalize } from 'normalizr'
import { FETCH_ITEMS } from './actions'

export default function(state = {}, action) {
  switch (action.type) {

    case FETCH_ITEMS: {
      const normalized = normalize([ ...action.payload.data ], [park])

      return {
        ...state,
        ...normalized.entities.parks,
      }
    }

    default: {
      return {
        ...state,
      }
    }
  }
}
