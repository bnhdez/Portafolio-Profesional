import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './assets/scss/theme.scss';
// Use the css from public/iconos if needed, but import usually expects src.
// Since I moved 'iconos' to public, I cannot import it in JS directly via relative path in src.
// I should add it to index.html OR move the css back to src/assets.
// Moving the css back to src/assets is better if I want to import it here.
// BUT the css references fonts.
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
