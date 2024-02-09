import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {QueryClientProvider,QueryClient} from "react-query"

const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      staleTime:10000,
      cacheTime:300000
    }
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </QueryClientProvider>
)
