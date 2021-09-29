
const initialState = {
    count: 0,
    cardData:[],
    amt:1
}

const prodIncrementReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_ONE_QUANTITY":
            if(cardData => cardData.id === action.data.id) {
                return {
                    ...state,
                    cardData: [...state.cardData,action.data],
                    amt: state.amt + 1
                }
            }
            break;
        case "SUB_ONE_QUANTITY":
            if(cardData => cardData.id === action.data.id) {
                return {
                    ...state,
                    cardData: [...state.cardData,action.data],
                    amt: state.amt - 1
                }
            }
                 
        default:
            return state;
    }
}



export default prodIncrementReducer;







