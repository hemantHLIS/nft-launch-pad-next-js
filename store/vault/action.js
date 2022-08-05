export const vaultActions = {
    CHANGE_VAULT: "CHANGE_VAULT",
    GET: "GET",
};

export const changeCurrentVault = (newVaultConfig) => {
    return {type: vaultActions.CHANGE_VAULT, vault_config: newVaultConfig};
}

export const getVault = () => {
    return {type: vaultActions.GET};
}