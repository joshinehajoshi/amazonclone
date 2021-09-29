export const counterAction = (data) => {
    console.log(data,"data");
    return {
        type: "ADD_ONE",
        data: data
    }
}

export const quantityIncrementAction = (data) => {
    return {
        type: "ADD_ONE_QUANTITY",
    }
}

export const quantityDecrementAction = (data) => {
    return {
        type: "SUB_ONE_QUANTITY",
    }
}
