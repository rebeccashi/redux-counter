const redux = require('redux'); //node js syntax
const createStore = redux.createStore;

const initialState = {
    counter: 0
}

//Reducer - updates store
//takes initialState whenver state is not defined
const rootReducer = (state = initialState, action) => {
    if (action.type === 'INC_COUNTER') {
        return {
            ...state, 
            counter: state.counter + 1
        };
    }
    if (action.type === 'ADD_COUNTER') {
        return {
            ...state, 
            counter: state.counter + action.value
        };
    }
    //state is immutable
    //returns updated state
};

// Store
const store = createStore(rootReducer);
console.log(store.getState());

//Subscription
store.subscribe(() => {
    console.log('[Subscription]', store.getState());
})

//Dispatching Action
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10});
console.log(store.getState());
