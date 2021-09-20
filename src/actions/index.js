export const counterAction = (data) => {
    console.log(data,"data");
    return {
        type: "ADD_ONE",
        data: data
    }
}

export const quantityIncrementAction = () => {
    return {
        type: "ADD_ONE_QUANTITY",
    }
}

export const quantityDecrementAction = () => {
    return {
        type: "SUB_ONE_QUANTITY",
    }
}
