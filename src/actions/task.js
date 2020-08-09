import * as types from '../constants/TodoType';

export const getAll = () => ({
    type: types.TASK_GET_ALL
})

export const addTask = task => ({
    type: types.TASK_ADD,
    task
})

export const getTask = id => ({
    type: types.TASK_GET,
    id
})

export const removeTask = id => ({
    type: types.TASK_REMOVE,
    id
})

export const updateTask = (params) => ({
    type: types.TASK_UPDATE,
    params
})

export const filterTable = (params) => ({
    type: types.FILTER_TABLE,
    params
})

export const sortTable = (sort) => ({
    type: types.SORT_TABLE,
    sort
})
