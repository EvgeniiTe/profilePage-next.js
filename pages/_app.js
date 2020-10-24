import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        html: {
          WebkitFontSmoothing: "auto",
          margin: "0",
          padding: "0",
          boxSizing: "border-box",
        },
        body: {
          fontFamily: "'Roboto', 'Times New Roman', sans-serif",
          backgroundColor: "#fff"
        }
      },
    },
  },
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
