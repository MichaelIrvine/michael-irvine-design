import App from "next/app";
import "../public/styles/sass/styles.scss";
import Layout from "../components/Layout";
import { PageTransition } from "next-page-transitions";

class main extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, router } = this.props;
    return (
      <div>
          <Layout>
        <PageTransition timeout={400} classNames="page-transition">
            <Component {...pageProps} key={router.route}></Component>
        </PageTransition>
          </Layout>
        <style jsx global>{`
          .page-transition-enter {
            opacity: 0;
            flex:1;
          }
          .page-transition-enter-active {
            opacity: 1;
            transition: opacity 300ms;
            flex:1;
          }
          .page-transition-exit {
            opacity: 1;
            flex:1;
          }
          .page-transition-exit-active {
            opacity: 0;
            transition: opacity 300ms;
            flex:1;
          }
        `}</style>
      </div>
    );
  }
}

export default main;
