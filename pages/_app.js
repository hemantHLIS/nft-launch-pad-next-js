import '../styles/globals.css'
import '../public/assets/css/bootstrap.min.css'
import '../public/assets/css/animate.min.css'
import '../public/assets/css/magnific-popup.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/assets/css/fontawesome-all.min.css'
import '../public/assets/css/uicons-solid-rounded.css'
// import '../public/assets/css/jquery.mCustomScrollbar.min.css'
import '../public/assets/css/flaticon.css'
import '../public/assets/css/slick.css'
import '../public/assets/css/default.css'
import '../public/assets/css/style.css'
import '../public/assets/css/custom.css'
import '../public/assets/css/responsive.css'
import React, { useEffect } from 'react'
import LoadingScreen from '../components/loadingScreen'
import { MoralisProvider } from 'react-moralis'


export default function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 5000);

  }, [])

  let getLayout = Component.getLayout ?? ((page) => page);
  return (<>
    {!loading ? (
      <React.Fragment>
        <MoralisProvider serverUrl="https://8n6ovswvsngx.usemoralis.com:2053/server" appId="0qmWMPK74AQxrbZDdRnQsDqHWg506zMME0j0cr4s">
          {getLayout(<Component {...pageProps} />)}
        </MoralisProvider>
      </React.Fragment>
    ) : (
      <LoadingScreen />
    )}
  </>);
}