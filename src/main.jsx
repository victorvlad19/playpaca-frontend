import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

console.log(
  '%cCopyright 2026 VvES',
  `font-size: 28px;
   font-weight: 900;
   font-family: 'Inter', sans-serif;
   color: #fc9a1a;
   text-shadow:
     1px 1px 0 #b36a00,
     2px 2px 0 #9a5a00,
     3px 3px 0 #7a4600,
     4px 4px 0 #5a3300,
     5px 5px 0 #3a2000,
     6px 6px 8px rgba(0,0,0,0.6);
   letter-spacing: 2px;
   padding: 8px 0;`
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
