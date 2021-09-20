const ADD_ONE = "ADD_ONE";

// const initialState = 0;
const initialState = {
    count: 0,
    cardData:[]
}



const counterReducer = (state = initialState, action) => {
    console.log("action",action.data, action.type)
    switch (action.type) {
        case "ADD_ONE":
            return  {
                ...state,
                count: state.count + 1,
                cardData: [...state.cardData,action.data]
            }
            return [...state.cardData, action.data]
                 
        default:
            return state;
            // return  {...state.cardData, action.data}
            
    }
}



export default counterReducer;







// const initialState = {
//     CardData:[]
// };

// const counterReducer = (state = [], action) => {
//     console.log(action,"action")
//     switch (action.type) {
        
//         case "Add One":
//             return [
//                 {state: state + 1}, 
//                 {cardData: action.data}
//             ];
//         default:
//             return state
//     }
// }

// export default counterReducer;