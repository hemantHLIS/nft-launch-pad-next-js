export const userActionTypes = {
    LOGIN: "LOGIN",
    GET: "GET",
    LOGOUT : "LOGOUT",
    WALLET_MODAL_STATUS: "WALLET_MODAL_STATUS",
    SET_WALLET_MODAL_STATUS: "SET_WALLET_MODAL_STATUS"
};

export const loginUser = (newUser) => {
    console.log('newUser=>'+JSON.stringify(newUser));
    return { type: userActionTypes.LOGIN, launchUser: newUser };
}
export const logOutUser = () => {
    return { type: userActionTypes.LOGOUT}
}

export const getUser = () => {
    return {type: userActionTypes.GET};
}

export const getWalletModalStatus = () => {
    return {type: userActionTypes.WALLET_MODAL_STATUS};
}
export const setWalletModalStatus = (newConfig) => {
    return {type: userActionTypes.WALLET_MODAL_STATUS, modal_config: newConfig};
}