import Document, { Html, Head, Main, NextScript } from "next/document";

class LaunchPad extends Document {
  render() {
    return (
      <Html>
        <Head></Head>
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
