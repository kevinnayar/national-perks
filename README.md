# National Perks
A detailed collection of all 59 U.S. National Parks

```
components/
  App/
    index.js
  Header/
  Navigation/
  Map/
containers/
  ParkList/
  Park/
  Filters/
  Sorters/
  Search/
store/
  parks/
    actions.js
    reducer.js
  park/
  filters/
  sorters/
  reducers.js
helpers/
styles/
index.js


const state = {
  default: {
    parks: [],
    park: {},
    filters: [],
    sorters: [],
  },
  active: {
    parks: [],
    park: {},
    filters: [],
    sorter: {},
  }
}
```
