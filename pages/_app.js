import '../styles/globals.css'
import {ThemeProvider} from "@mui/styles";
import {theme} from "../config/theme/theme";
import * as React from 'react';
import createEmotionCache from '../config/createEmotionCache';

const clientSideEmotionCache = createEmotionCache();

function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;


  return <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>


}

export default MyApp
