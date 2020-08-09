import {
    TOGGLE_FORM,
    SET_TASK_EDIT
} from '../constants/TodoType'

const initialState = {
    isDisplay: false,
    taskEdit: {}
}


export default (state = initialState, action)  => {
    switch (action.type) {
        case TOGGLE_FORM:
            if (action.status === 'open') {
                return {
                    ...state,
                    isDisplay: true
                }
            }
            if (action.status === 'close') {
                return {
                    ...state,
                    isDisplay: false
                }
            }
            return {
                ...state,
                isDisplay: !state.isDisplay
            }
        case SET_TASK_EDIT:
            return {
                ...state,
                taskEdit: action.task
            }

        default:
            return state
    }
}
