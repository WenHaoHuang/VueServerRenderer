import axios from 'axios'

const HOST = 'https://cnodejs.org/api/v1/'

export function ajax(options) {
    return new Promise((resolve, reject) => {
        const api = HOST + options.api
        axios.get(api, options)
            .then((response) => {
                resolve(response.data)
            })
            .catch((error) => {
                reject(error)
            })
    })
}
