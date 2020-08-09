import { combineReducers }  from 'redux'
import task from './task'
import form from './form'
const rootReducer = combineReducers({
    task,
    form
})

export default rootReducer
