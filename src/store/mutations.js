export default {
    SET_FETCH: (state, {params,response}) => {
        state.STATE[params['api']] = response;
    },
    SET_ERROR: (state, {params,error}) => {
        error.data = []
        state.ERRORS[params['api']] = error;
    },
    SET_DETAIL: (state, {response}) => {
        state.STATE['detail'] = response;
    },
    SET_ERROR_DETAIL: (state, {error}) => {
        error.data = []
        state.ERRORS['detail'] = error;
    }
}
