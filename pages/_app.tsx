import "../styles/globals.css";
import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import AOS from "aos";
import { persistStore } from "redux-persist";
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

  persistStore(store);

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <div className="page-wrapper">
          <Header />
          <div className="component-wrapper">
            <Component {...pageProps} />
          </div>
        </div>
        <ToastContainer />
        <Footer />
      </Provider>
    </ThemeProvider>
  );
}

export default MyApp;
