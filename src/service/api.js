import axios from 'axios'

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'

export const post = (url, data = {}) => {
  return new Promise(
    (resolve, reject) => {
      axios.post(url, data, {
        baseURL: '/api'
      }).then(
        (response) => {
          resolve(response.data)
        }, err => {
          reject(err)
        })
    }
  )
}
