import { schema } from 'normalizr'

export const state = new schema.Entity('states')

export const park = new schema.Entity('parks', {
  states: [state]
})
