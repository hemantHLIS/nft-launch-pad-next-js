import { darkTheme, lightTheme, Theme, SwapWidget } from '@uniswap/widgets';

export const UniswapDynamic = (props) => {
    const tokenList = props.tokenList;

    const theme = {
        primary: '#FFF',
        secondary: '#A9A9A9',
        interactive: '#000',
        container: '#4E4E5A',
        module: '#222633',
        accent: '#2be84b',
        outline: '#CC1',
        dialog: '#000',
        // fontFamily: 'Josefin Sans',
        borderRadius: 0.5,
      }
    return (<>
        <div className="Uniswap">
            <SwapWidget theme={theme} width={'100%'} tokenList={tokenList} />
        </div>
    </>)
}

export default UniswapDynamic;