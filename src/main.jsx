import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './components/App'
import { AuthProvider } from "./context/AuthContext"
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
)
