
const initialState = 1



const prodIncrementReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_ONE_QUANTITY":
            return  state + 1
        case "SUB_ONE_QUANTITY":
            return state - 1   
        default:
            return state;
    }
}



export default prodIncrementReducer;







