export const counterAction = (data) => {
    console.log(data,"data");
    return {
        type: "ADD_ONE",
        data: data
    }
}

