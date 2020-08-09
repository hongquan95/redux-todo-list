import {
    TASK_GET_ALL,
    TASK_ADD,
    TASK_REMOVE,
    TASK_UPDATE,
    FILTER_TABLE,
    SORT_TABLE
} from '../constants/TodoType'
import _ from 'lodash';


const listTask = JSON.parse(localStorage.getItem('tasks'));
const initialState = {
    tasks: listTask ? listTask : [],
    filterTask: {
        name: "",
        state: "0"
    },
    sortTable: "0"
}


export default (state = initialState, action)  => {
    switch (action.type) {
        case TASK_GET_ALL:
            return state
        case TASK_ADD:
            const listTasks = [...state.tasks, action.task]
            localStorage.setItem('tasks', JSON.stringify(listTasks));
            return {
                ...state,
                tasks: listTasks
            }
        case TASK_UPDATE:
            let indexUpdate = _.findIndex(state.tasks, { 'id': action.params.id} );
            const arrayUpdated = [...state.tasks.slice(0, indexUpdate), action.params, ...state.tasks.slice(indexUpdate + 1,state.tasks.length)];
            localStorage.setItem('tasks', JSON.stringify(arrayUpdated));
            return {
                ...state,
                tasks: arrayUpdated
            }
        case TASK_REMOVE:
            let index = _.findIndex(state.tasks, {'id': action.id });
            const newAr = [...state.tasks.slice(0, index),
                ...state.tasks.slice(index + 1, state.tasks.length)];
            localStorage.setItem('tasks', JSON.stringify(newAr));
            return {
                ...state,
                tasks: newAr
            }
            case FILTER_TABLE:
                return {
                    ...state,
                    filterTask: action.params
                }
            case SORT_TABLE:
                console.log(action.params);
                return {
                    ...state,
                    sortTable: action.sort
                }
        default:
            return state
    }
}
