import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { EntradasProvider } from './contexts/EntradasContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <EntradasProvider>
      <App />
    </EntradasProvider>
  </React.StrictMode>,
)
