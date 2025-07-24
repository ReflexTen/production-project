import { createRoot } from 'react-dom/client';
import App from './app/App';
import { BrowserRouter } from 'react-router-dom';
import { ThemProvider } from 'app/providers/ThemeProvider';
import './shared/config/i18n/i18n';

const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ThemProvider>
      <App />
    </ThemProvider>
  </BrowserRouter>
);
