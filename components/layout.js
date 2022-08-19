import Script from "next/script";
import Footer from "./footer";
import Header from "./header";
import ScrollButton from "./ScrollButton";

var $ = require("jquery");
if (typeof window !== "undefined") {
   window.$ = window.jQuery = require("jquery");
}

export default function Layout(props) {
    const { children } = props;
    return (
        <>
            {/* <PreLoader/> */}
            <div className="main-content">
                <Header />
                <main>{children}</main>
                <ScrollButton smooth />
            </div>
            <Footer />
            <Script src={process.env.NEXT_PUBLIC_APP_URL+"/assets/js/vendor/jquery-3.6.0.min.js"}></Script>
 
            <Script src={process.env.NEXT_PUBLIC_APP_URL+"/assets/js/swiper-bundle.min.js"}></Script>

            <Script src={process.env.NEXT_PUBLIC_APP_URL+"/assets/js/bootstrap.min.js"}></Script>
            <Script src={process.env.NEXT_PUBLIC_APP_URL+"/assets/js/isotope.pkgd.min.js"}></Script>
            <Script src={process.env.NEXT_PUBLIC_APP_URL+"/assets/js/imagesloaded.pkgd.min.js"}></Script>
            {/* <Script src={process.env.NEXT_PUBLIC_APP_URL+"/assets/js/jquery.magnific-popup.min.js"></Script> */}
            {/* <Script src={process.env.NEXT_PUBLIC_APP_URL+"/assets/js/jquery.mCustomScrollbar.concat.min.js"></Script> */}
            {/* <Script src={process.env.NEXT_PUBLIC_APP_URL+"/assets/js/slick.min.js"></Script> */}
            <Script src={process.env.NEXT_PUBLIC_APP_URL+"/assets/js/wow.min.js"}></Script>
            {/* <Script src={process.env.NEXT_PUBLIC_APP_URL+"/assets/js/plugins.js"></Script> */}
            <Script src={process.env.NEXT_PUBLIC_APP_URL+"/assets/js/apexcharts.js"}></Script>
            <Script src={process.env.NEXT_PUBLIC_APP_URL+"/assets/js/main.js"}></Script>
            
        </>
    );
}