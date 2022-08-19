import WalletConnectProvider from "@walletconnect/web3-provider"

export const walletConnectProvider = ()=> {
    const provider = new WalletConnectProvider({
        rpc: {
            4: "https://eth-rinkeby.alchemyapi.io/v2/Zm7W-MKgphvYTxRFPgVYFHcREUKIHxl4"
        }
    })
    return provider;
}

export const wcProviderUrl = "https://eth-rinkeby.alchemyapi.io/v2/Zm7W-MKgphvYTxRFPgVYFHcREUKIHxl4";