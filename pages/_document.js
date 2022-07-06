import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

class LaunchPad extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="assets/img/favicon.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

LaunchPad.getInitialProps = async (ctx) => {
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      // eslint-disable-next-line react/display-name
      enhanceApp: (App) => (props) => <App {...props} />,
    });

  const initialProps = await Document.getInitialProps(ctx);

  return { ...initialProps };
};

export default LaunchPad;
