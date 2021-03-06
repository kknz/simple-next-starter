import App, { Container } from "next/app";
import NProgress from "nprogress";
import Router from "next/router";
import NextSeo from "next-seo";
import SEO from "../next-seo.config";

Router.events.on("routeChangeStart", url => {
  // console.log(`Loading: ${url}`)
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <NextSeo config={SEO} />
        <Component {...pageProps} />
      </Container>
    );
  }
}
