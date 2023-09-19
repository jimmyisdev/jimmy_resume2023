import "../styles/reset.scss";
import "../styles/global.scss";
import type { AppProps } from "next/app";
import Layout from "@component/components/Layout/Layout";
import ThemeProvider from "@component/context/themeContext";
import ModalProvider from "@component/context/modalContext";

export default function App({ Component, pageProps }: AppProps) {

  return (
    <ThemeProvider>
      <ModalProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ModalProvider>
    </ThemeProvider>
  );
}
