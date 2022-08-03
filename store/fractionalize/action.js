export const fractionalizeActionTypes = {
    SET_MODE: "SET_MODE",
    GET_MODE: "GET_MODE",

};

export const setMode = (data) =>{
    return {type: fractionalizeActionTypes.SET_MODE, fractionalize: data};
}

export const getMode = () => {
    return {type: fractionalizeActionTypes.GET_MODE};
}