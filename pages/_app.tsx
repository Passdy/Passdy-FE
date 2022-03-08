import "../styles/globals.css";
import React, { useEffect } from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import Head from "next/head";
import AOS from "aos";
import { Provider } from "react-redux";
import theme from "../theme";
import "aos/dist/aos.css";
import { store } from "../store";
import Footer from "../components/Footer";
import Header from "../components/Header";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      delay: 50,
      once: false,
      duration: 400,
      anchorPlacement: "top-bottom",
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Head>
          <title>PassDy</title>
        </Head>
        <Header />
        <div className="component-wrapper">
          <Component {...pageProps} />
        </div>
        <Footer />
      </Provider>
    </ThemeProvider>
  );
}

export default MyApp;
