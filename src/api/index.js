import axios from 'axios'

class Api {
  getRequest (url) {
    return axios({
      method: 'get',
      url,
    })
  }

  ping () {
    return 'pong'
  }

  getData () {
    return this.getRequest('data/parks.json')
  }

  getSorters () {
    return this.getRequest('data/sorters.json')
  }
}

export default new Api()
