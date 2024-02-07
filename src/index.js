import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./css/index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const querClient=new QueryClient({
  defaultOptions:{
    queries:{
      refetchOnWindowFocus:false,
      refetchOnReconnect:true,
      refetchInterval:10000,
      staleTime:10000
    }
  }
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <QueryClientProvider client={querClient}>
    <App/>
  </QueryClientProvider>
);



