import { userActionTypes } from "./action";

const userInitialState = {
    launchUser: {
        wallet_address: '0x0',
        balance: '',
        photo: '',
        username: 'nftminer',
        gender: ''
    },

}


export default function reducer(state = userInitialState, action) {
    switch (action.type) {
        case userActionTypes.LOGIN:
        case userActionTypes.LOGOUT:
            return { ...state, launchUser: action.launchUser };
        default:
            return state;
    }
}