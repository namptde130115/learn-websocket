import React from "react";
import { Provider } from "react-redux";
import { ConfigProvider } from "antd";
import en_US from "antd/es/locale-provider/en_US";
import moment from "moment";
import "moment/locale/vi";
import { PersistGate } from "redux-persist/lib/integration/react";
import "suneditor/dist/css/suneditor.min.css";

import AppRouter from "./app-router";
import { ErrorBoundary, Loading } from "./components";
import store, { persistor } from "./store";
import Web3 from "web3";
import { Web3ReactProvider } from "@web3-react/core";
import { QueryClient, QueryClientProvider } from "react-query";

const getLibrary = (provider: any): Web3 => {
  return new Web3(provider);
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { 
      refetchOnWindowFocus: false, 
      retry: false, 
      staleTime: 1000 * 5,
      retryOnMount: false, 
    },
  },
});
moment.locale("vi");

function App() {
  return (
    <ConfigProvider locale={en_US}>
        <QueryClientProvider client={queryClient}>
          <Web3ReactProvider getLibrary={getLibrary}>
          <Provider store={store}>

            <PersistGate loading={<Loading full />} persistor={persistor}>
              <ErrorBoundary>
                <AppRouter />
              </ErrorBoundary>
            </PersistGate>
            </Provider>

          </Web3ReactProvider>
        </QueryClientProvider>
    </ConfigProvider>
  );
}

export default App;
