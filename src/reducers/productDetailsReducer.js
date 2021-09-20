const initialState1 = {
    cardData: []
}

const productDetailsReducer = (state = initialState1, action) => {
    switch (action.type) {
        case "Add Product Details":
            return  action.data;        
        default:
            return state
    }
}

export default productDetailsReducer;