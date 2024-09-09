import React from 'react'
import ReactDOM from 'react-dom/client'
import {MantineProvider} from '@mantine/core';

import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';

import {App} from './App.jsx'
import {QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <MantineProvider>
        <App/>
      </MantineProvider>
    </QueryClientProvider>
  </React.StrictMode>
)
