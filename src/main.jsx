import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './assets/vars.css';
import './assets/index.css';
import Portfolio_v1 from './page/portfolio/Portfolio_v1.jsx';

/* Global FontA imports
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons';
library.add(fas, faTwitter, faFontAwesome); */

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Portfolio_v1 />
  </StrictMode>
)
