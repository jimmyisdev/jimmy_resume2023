import Layout from "@component/components/Layout/Layout";
import type { AppProps } from "next/app";
import "../styles/global.scss";
import "../styles/reset.scss";
import ThemeProvider from "@component/context/context";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
