import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// React Router
import { BrowserRouter } from 'react-router-dom';
// Swiper Css Files
import 'swiper/css';
import 'swiper/css/navigation';

// App Contexts
import AppContextsProvider from '@contexts/AppContextsProvider';

// Tanstack/React Query
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// Create a client
const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AppContextsProvider>
          <App />
        </AppContextsProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>,
)