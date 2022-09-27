import "../styles/globals.css";
import { ThemeProvider } from "@mui/styles";
import * as React from "react";;
import { CacheProvider } from "@emotion/react";
import Head from "next/head";
import createEmotionCache from "../src/createEmotionCache";
import theme from "../src/theme";

const clientSideEmotionCache = createEmotionCache();

function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
