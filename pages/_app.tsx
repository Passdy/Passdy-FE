import "../styles/globals.css";
import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "styled-components";
import Head from "next/head";
import AOS from "aos";
import { Provider } from "react-redux";
import theme from "../theme";
import "aos/dist/aos.css";
import "react-toastify/dist/ReactToastify.css";
import { store } from "../store";
import Footer from "../components/Footer";
import Header from "../components/Header";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
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
        <SessionProvider session={session}>
          <Head>
            <title>Passdy</title>
          </Head>
          <div className="page-wrapper">
            <Header />
            <div className="component-wrapper">
              <Component {...pageProps} />
            </div>
          </div>
          <ToastContainer />
          <Footer />
        </SessionProvider>
      </Provider>
    </ThemeProvider>
  );
}

export default MyApp;
