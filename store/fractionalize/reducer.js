import { fractionalizeActionTypes } from "./action";

const fractionalizeInitState = {
    fractionalize: {
        mode: 'erc20'
    }
};

export default function reducer(state = fractionalizeInitState, action) {
    switch (action.type) {
        case fractionalizeActionTypes.SET_MODE:
            return { ...state, fractionalize: action.fractionalize };

        default:
            return state;
    }
}