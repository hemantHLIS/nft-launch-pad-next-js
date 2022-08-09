import '../public/assets/css/animate.min.css'
import "react-notifications/lib/notifications.css";
import '../public/assets/css/bootstrap.min.css'
import '../public/assets/css/magnific-popup.css'
import '../styles/globals.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/assets/css/fontawesome-all.min.css'
import '../public/assets/css/uicons-solid-rounded.css'
// import '../public/assets/css/jquery.mCustomScrollbar.min.css'
import React, { useEffect } from 'react'
import { MoralisProvider } from 'react-moralis'
import LoadingScreen from '../components/loadingScreen'
import '../public/assets/css/custom.css'
import '../public/assets/css/default.css'
import '../public/assets/css/flaticon.css'
import '../public/assets/css/responsive.css'
import '../public/assets/css/slick.css'
import '../public/assets/css/style.css'
import { wrapper } from '../store/store'
import { NotificationContainer } from 'react-notifications'


const MyApp = ({ Component, pageProps }) => {
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);

  }, [])

  let getLayout = Component.getLayout ?? ((page) => page);
  return (<>
    {!loading ? (
      <React.Fragment>
         <MoralisProvider serverUrl="https://8n6ovswvsngx.usemoralis.com:2053/server" appId="0qmWMPK74AQxrbZDdRnQsDqHWg506zMME0j0cr4s"> 
        {/*<MoralisProvider serverUrl="https://98uso6yplfzn.usemoralis.com:2053/server" appId="BGFYXJYmeG1PFnD8XptoQX5IpGv5LWW61IZJ9NYD"> */}
          {getLayout(<Component {...pageProps} />)}
        </MoralisProvider>
        <NotificationContainer/>
      </React.Fragment>
    ) : (
      <LoadingScreen />
    )}
  </>);
}

export default wrapper.withRedux(MyApp);