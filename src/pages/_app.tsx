import Layout from "@component/components/Layout/Layout";
import type { AppProps } from "next/app";
import "../styles/global.scss";
import "../styles/reset.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
