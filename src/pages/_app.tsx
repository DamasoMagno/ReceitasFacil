import type { AppProps } from 'next/app';

import { ThemeProvider } from "styled-components";

import { GlobalStyles } from '../styles/GlobalStyles';
import { DefaultTheme } from "../styles/Themes";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  );
}
