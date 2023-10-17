import store from "../store/store";
import { Provider } from "react-redux";
import NextNProgress from "nextjs-progressbar";
import { appWithTranslation } from "next-i18next";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";

import "devextreme/dist/css/dx.light.css";
import "../styles/globals.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      // refetchOnMount: false,
      cacheTime: 0,
    },
  },
});

import type { AppProps } from "next/app";

const TSWebApp = ({ Component, pageProps }: AppProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <NextNProgress color="#00aee2" />
        <Component {...pageProps} />
      </Provider>
      {/* <ReactQueryDevtools initialIsOpen={false} position="bottom-right" /> */}
    </QueryClientProvider>
  );
};

export default appWithTranslation(TSWebApp);
