import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Global} from './index.js'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Global>
   <App />
  </Global>
  </React.StrictMode>, 
)
