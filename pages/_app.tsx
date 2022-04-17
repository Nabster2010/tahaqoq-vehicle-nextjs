import type { AppProps } from "next/app";
import { SessionProvider, useSession } from "next-auth/react";
import Layout from "../components/Layout";
import "../styles/globals.css";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import store from "../app/store";

export default function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <>
      <Provider store={store}>
        <SessionProvider session={session}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SessionProvider>
        <ToastContainer
          position="bottom-left"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          draggable={true}
          closeOnClick
          pauseOnHover
        />
      </Provider>
    </>
  );
}
