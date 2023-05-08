import "../styles/reset.scss";
import "../styles/global.scss";
import type { AppProps } from "next/app";
import Layout from "@component/components/Layout/Layout";
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
