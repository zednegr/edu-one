import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider as LangProvider } from './context/langState.jsx';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
      <QueryClientProvider client={queryClient}>
            <LangProvider>
                  <App />
            </LangProvider>
      </QueryClientProvider>
)
