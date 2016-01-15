import { createStore, combineReducers } from 'redux';

/* CONSTANTS */
const constants = {
    ADD_TODO: "ADD_TODO",
    TOGGLE_TODO: "TOGGLE_TODO",

    VISIBILITY_FILTER: "VISIBILITY_FILTER",
};

/* REDUCERS */
function todo(state=[], action) {
    switch(action.type) {
        case constants.TOGGLE_TODO:
            return Object.assign(state, { completed: !state.completed });
        default:
            return state;
    }
};

function todos(state=[], action) {
    switch(action.type) {
        case constants.ADD_TODO:
            return [...state, { text: action.text, completed: false }];
        case constants.TOGGLE_TODO:
            return [...state.slice(0, action.index),
                    todo(state[action.index], action),
                    ...state.slice(action.index + 1)];
        default:
            return state;
    }
};

function visibilityFilter(state=[], action) {
    switch(action.type) {
        case constants.VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
};

const reducer = combineReducers({todos, visibilityFilter});

/* STORE */
let store = createStore(reducer);

/* ACTIONS */
store.dispatch({type: constants.ADD_TODO, text: "test1"});
store.dispatch({type: constants.ADD_TODO, text: "test2"});
store.dispatch({type: constants.ADD_TODO, text: "test3"});

store.dispatch({type: constants.TOGGLE_TODO, index: 1});

store.dispatch({type: constants.VISIBILITY_FILTER, filter: "all"});

/* TEST */

console.log(...store.getState().todos);
console.log(store.getState().visibilityFilter);
