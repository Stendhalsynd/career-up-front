import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

const rootElement = document.getElementById('root')

// Use createRoot instead of render
const root = ReactDOM.createRoot(rootElement)

root.render(
  <div>
    <App />
  </div>,
)

registerServiceWorker()
