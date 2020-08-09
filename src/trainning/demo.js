import { createStore } from 'redux';
import reducer from '../reducers'
import { toggle, sort } from '../actions'
// var initialState = {
//     state: '0',
//     sortB: {
//         by: 'name',
//         val: -1
//     }
// }
// var myReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'TOGGLE':
//             return {
//                 ...state,
//                 state: action.state
//             }
//         case 'SORT':
//             return {
//                 ...state,
//                 sortB: action.sortB
//             }
//         default:
//             return {
//                 ...state
//             }
//     }
// }
// var store = createStore(myReducer);
// var action = {
//     type: 'TOGGLE',
//     state: '2'
// }
// var actionTwo = {
//     type: 'SORT',
//     sortB: {
//         by: 'name',
//         val: 1
//     }
// }
// console.log('DEFAULT', store.getState());
// store.dispatch(action);
// console.log('NEW', store.getState());
// store.dispatch(actionTwo);
// console.log('NEW2', store.getState());


const store = createStore(reducer);


console.log('DEFAULT', store.getState());

store.dispatch(toggle(true));

console.log('T', store.getState());

store.dispatch(sort({
    sortBy: 'age',
    val: 1
}));

console.log('SORT', store.getState());
