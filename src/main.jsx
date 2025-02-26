import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import { Toaster } from 'react-hot-toast'
import { ThemeProvider } from './contaxt/ThemeProvider.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <ThemeProvider>
    <BrowserRouter>
    <App />
    <Toaster/>
    </BrowserRouter>
    </ThemeProvider>
    </Provider>
  </StrictMode>,
)
