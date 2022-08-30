import { darkTheme, lightTheme, Theme, SwapWidget } from '@uniswap/widgets';
import { Component } from 'react';

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

class UniswapDynamic extends Component {
    // const tokenList = props.tokenList;

    
    render() {
        return <div className="Uniswap">
            <SwapWidget theme={theme} width={'100%'}   />
        </div>
    }
}

export default UniswapDynamic;