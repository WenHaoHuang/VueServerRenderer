import {fetch} from '../api/fetch'

export default {
    FETCH: ({commit}, params) => {
        return fetch(params)
            .then((response) => {
                commit('SET_FETCH', {params, response})
            })
            .catch((error) => {
                commit('SET_ERROR', {params, error})
            })
    },
    DETAIL: ({commit}, params) => {
        return fetch(params)
            .then((response) => {
                commit('SET_DETAIL', {response})
            })
            .catch((error) => {
                commit('SET_ERROR_DETAIL', {error})
            })
    }
}
