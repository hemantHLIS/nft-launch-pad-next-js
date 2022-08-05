import { vaultActions } from "./action";

const vaultInitialState = {
    vault_config: {
        vault: {
        }
    }
}

export default function reducer(state = vaultInitialState, action) {
    switch (action.type) {
        case vaultActions.CHANGE_VAULT:
            return { ...state, vault_config: action.vault_config };

        default:
            return state;
    }
}