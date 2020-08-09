import * as types from '../constants/TodoType';
export const toggle = status => ({
    type: types.TOGGLE_FORM,
    status
})

export const setTaskEdit = task => ({
    type: types.SET_TASK_EDIT,
    task
})
