import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'

import App from './App'
import reportWebVitals from './reportWebVitals'

import './index.css'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      /* 
        refetchOnWindowFocus: automatically requests fresh data in
        the background if user leaves the app and returns to stale data. 
      */
      refetchOnWindowFocus: false,
      // refetchOnMount: if true, refetch on mount if the data is stale.
      refetchOnMount: false,
      // refetchOnReconnect: if true, refetch on reconnect if the data is stale.
      refetchOnReconnect: false,
      // retry: if true, failed queries will retry infinitely.
      retry: false,
      // staleTime: the time in milliseconds after data is considered stale. Defaults to 0.
      staleTime: 5 * 60 * 1000,
    },
  },
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
