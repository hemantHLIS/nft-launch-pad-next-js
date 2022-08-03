export const userActionTypes = {
    LOGIN: "LOGIN",
    GET: "GET",
    LOGOUT : "LOGOUT"
};

export const loginUser = (newUser) => {
    return { type: userActionTypes.LOGIN, launchUser: newUser };
}
export const logOutUser = () => {
    return { type: userActionTypes.LOGOUT}
}

export const getUser = () => {
    return {type: userActionTypes.GET};
}