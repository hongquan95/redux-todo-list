import * as types from '../constants/TodoType';

export const toggle = state => ({
    type: types.TOGGLE,
    state
})
export const sort = sortObj => ({
    type: types.SORT,
    sortObj
})
