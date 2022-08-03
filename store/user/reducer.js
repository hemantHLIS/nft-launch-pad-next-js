import { userActionTypes } from "./action";

const userInitialState = {
    launchUser: {
        wallet_address: '',
        balance: '',
        photo: '',
        username: 'nftminer',
        gender: ''
    }
}

export default function reducer(state = userInitialState, action) {
    switch (action.type) {
        case userActionTypes.LOGIN:
            return { ...state, launchUser:  action.launchUser };
        case userActionTypes.LOGOUT:
             return {...state, launchUser: {}};   
        default:
            return state;
    }
}