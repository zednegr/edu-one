import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider as LangProvider } from "./context/langState.jsx";
import { Provider as AuthProvider } from "./context/authState.jsx";
import { Provider as DataLength } from "./context/dataLength.jsx";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter } from "react-router-dom";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={true} />
      <AuthProvider>
        <LangProvider>
          <DataLength>
            <App />
          </DataLength>
        </LangProvider>
      </AuthProvider>
    </QueryClientProvider>
  </BrowserRouter>
);
