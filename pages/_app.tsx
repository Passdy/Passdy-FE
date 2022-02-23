import "../styles/globals.css";
import React, { useEffect } from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import Head from "next/head";
import AOS from "aos";
import theme from "../theme";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>PassDy</title>
      </Head>
      <Component {...pageProps} />;
    </ThemeProvider>
  );
}

export default MyApp;
