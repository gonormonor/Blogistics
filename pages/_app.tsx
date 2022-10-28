import React from "react";
import { AppProps } from "next/app";
import AuthProvider from "../utils/AuthProvider";
import "../styles/index.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
