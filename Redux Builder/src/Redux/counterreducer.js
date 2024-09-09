const initialState = { value: 10 };

export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD':
            return { ...state, value: state.value + action.payload };  // Update 'value'
        case 'REDUCE':
            return { ...state, value: state.value - action.payload };  // Update 'value'
        default:
            return state;
    }
};
