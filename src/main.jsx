import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'
import App from './App.jsx'


const El=document.querySelector("#root");
const root=createRoot(El);
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
)
