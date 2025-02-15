import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './assets/index.css';
import Portfolio_v1 from './pages/Portfolio_v1.jsx';
import Footer from './component/footer/Footer.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Portfolio_v1 />
    <Footer />
  </StrictMode>
)
