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
            <Script src="assets/js/vendor/jquery-3.6.0.min.js"></Script>
 
            <Script src="assets/js/swiper-bundle.min.js"></Script>

            <Script src="assets/js/bootstrap.min.js"></Script>
            <Script src="assets/js/isotope.pkgd.min.js"></Script>
            <Script src="assets/js/imagesloaded.pkgd.min.js"></Script>
            {/* <Script src="assets/js/jquery.magnific-popup.min.js"></Script> */}
            {/* <Script src="assets/js/jquery.mCustomScrollbar.concat.min.js"></Script> */}
            {/* <Script src="assets/js/slick.min.js"></Script> */}
            <Script src="assets/js/wow.min.js"></Script>
            {/* <Script src="assets/js/plugins.js"></Script> */}
            <Script src="assets/js/apexcharts.js"></Script>
            <Script src="assets/js/main.js"></Script>
            
        </>
    );
}