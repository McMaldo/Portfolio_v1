import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './assets/vars.css';
import './assets/index.css';
import Portfolio_v1 from './page/portfolio/Portfolio_v1.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Portfolio_v1 />
  </StrictMode>
)
