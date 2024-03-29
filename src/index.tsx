import React from 'react'
import ReactDOM from 'react-dom/client'
import ResponsiveDrawer from './ResponsiveDrawer'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <ResponsiveDrawer />
  </React.StrictMode>
)
