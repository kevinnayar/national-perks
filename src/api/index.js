import axios from 'axios'

class Api {
  getRequest (url) {
    return axios({
      method: 'get',
      url,
    })
  }

  getParks () {
    return this.getRequest('/data/parks.json')
  }

  getStates () {
    return this.getRequest('/data/states.json')
  }
}

export default new Api()
