import { modalsActionTypes } from "./action";

const modalInitialState = {
    modal_config: {
        wallet: false,
        walletOpt: 'metamask'
    }
}

export default function reducer(state = modalInitialState, action) {
    switch (action.type) {
        case modalsActionTypes.SET:
            return {...state, modal_config: action.modal_config};
        default:
           return state;
    }
}