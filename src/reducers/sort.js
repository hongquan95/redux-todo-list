import { TOGGLE } from '../constants/TodoType'
const initialState = false;
export default (state = initialState, action)   => {
    switch (action.type) {
        case TOGGLE:
            return !state
        default:
            return state
    }
}
